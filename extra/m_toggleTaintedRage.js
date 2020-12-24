const imagePath = "assets/macro_icons/demon-skull-BG.svg";
const rageFlagNPC = 'npc.taintedRage';
const effectName = "Tainted Rage";

async function toggleTaintedRage(thisToken) {
    let isRaging = thisToken.actor.getFlag(game.system.id, rageFlagNPC);
    console.log(isRaging);
    if (isRaging) {
        // shield is up
        await thisToken.actor.removeCustomModifier('damage', effectName);
        await thisToken.actor.removeCustomModifier('ac', effectName);
        await thisToken.actor.update({ "data.attributes.hp.temp": 0 });
        await thisToken.actor.unsetFlag(game.system.id, rageFlagNPC);
        if (token.data.effects.includes(imagePath)) {
            token.toggleEffect(imagePath);
        }
        ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: thisToken }), content: `${thisToken.name} is no longer raging!` });
    } else {
        // shield is not up
        await thisToken.actor.addCustomModifier('damage', effectName, 2, 'status');
        await thisToken.actor.addCustomModifier('ac', effectName, -1, 'status');
        await thisToken.actor.update({ "data.attributes.hp.temp": 5 });
        await thisToken.actor.setFlag(game.system.id, rageFlagNPC, true);
        if (!token.data.effects.includes(imagePath)) {
            token.toggleEffect(imagePath);
        }
        ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: thisToken }), content: `${thisToken.name} enters a rage!` });
    }


}

// this macro is intended to be used from the token action HUD. Therefore, it only works the single selected token.
if ((token && (token.actor.data.type === "npc"))) {
        toggleTaintedRage(token);    
} else {
    ui.notifications.warn("You must select a NPC Actor to use this Macro.");

}

