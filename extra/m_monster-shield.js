const imagePath = "assets/macro_icons/skull-shield-noBG.svg";
const shieldFlagNPC = 'npc.shieldUp';

async function toggleShield(thisToken) {
        let isShieldUp = thisToken.actor.getFlag(game.system.id, shieldFlagNPC);
        console.log(isShieldUp);
        if (isShieldUp) {
            // shield is up
            thisToken.actor.removeCustomModifier('ac', 'Raised Shield');
            await thisToken.actor.unsetFlag(game.system.id, shieldFlagNPC);
            if (token.data.effects.includes(imagePath)) {
                token.toggleEffect(imagePath);
            }
            ChatMessage.create({speaker: ChatMessage.getSpeaker({token: thisToken}), content: `${thisToken.name} lowers its shield!`});
        } else {
            // shield is not up
            thisToken.actor.addCustomModifier('ac', 'Raised Shield', actor.data.data.attributes.shield.ac, 'circumstance');
            await thisToken.actor.setFlag(game.system.id, shieldFlagNPC, true);
            if (!token.data.effects.includes(imagePath)) {
                token.toggleEffect(imagePath);
            }
            ChatMessage.create({speaker: ChatMessage.getSpeaker({token: thisToken}), content: `${thisToken.name} raises its shield!`});
        }


}

let selectedTokens = canvas.tokens.controlled;


if (selectedTokens.length < 1) {
    ui.notifications.warn("You must select at least one NPC token.");
} else {
    let foundShield = false;
    for (let aToken of selectedTokens) {
        console.log(aToken.actor.data.type);
        console.log(aToken.actor.data.data.attributes.shield.ac);
        if ((aToken.actor.data.type ==="npc") && (aToken.actor.data.data.attributes.shield.ac > 0)) {
            foundShield = true;
            toggleShield(aToken);
        }
    }
    if (!foundShield) {
        ui.notifications.warn("You must select a NPC Actor with Shield Parameters to use this Macro.");
    }
}
