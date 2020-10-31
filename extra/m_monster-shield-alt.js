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
        ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: thisToken }), content: `${thisToken.name} lowers its shield!` });
    } else {
        // shield is not up
        thisToken.actor.addCustomModifier('ac', 'Raised Shield', actor.data.data.attributes.shield.ac, 'circumstance');
        await thisToken.actor.setFlag(game.system.id, shieldFlagNPC, true);
        if (!token.data.effects.includes(imagePath)) {
            token.toggleEffect(imagePath);
        }
        ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: thisToken }), content: `${thisToken.name} raises its shield!` });
    }


}

// this macro is intended to be used from the token action HUD. Therefore, it only works the single selected token.
if ((token && (token.actor.data.type === "npc") && (token.actor.data.data.attributes.shield.ac > 0))) {
    if (token.actor.data.data.attributes.shield.value > Number(token.actor.data.data.attributes.shield.brokenThreshold)) {
        toggleShield(token);    
    } else {
        ui.notifications.warn(`${token.name}'s shield is broken!`);
    }
    
} else {
    ui.notifications.warn("You must select a NPC Actor with a shield to use this Macro.");

}

