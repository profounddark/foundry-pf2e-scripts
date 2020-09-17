const weaponName = "Powerful Fist";
const effectName = "Effect: Panache";
const toggleMacroName = "Toggle Panache";

(async () => {
    // I added this for usability; basically, it checks to see if it's a PC and they have the Confident Finisher feature
    if (actor && actor.isPC && actor.items.find(entry => (entry.name === "Confident Finisher" && entry.type === "feat"))) {
        
        // this fetches to see if the PC has the Panache Effect added
        const panacheEffect = actor.items.find(entry => (entry.name === effectName && entry.type === "effect"));

        if (panacheEffect) {

            // Note: this is a workaround of actor.setRollOption
            const flag = 'rollOptions.damage-roll.finisher';
            await actor.setFlag(game.system.id, flag, true);
            
            let strike = (actor.data.data.actions ?? []).filter(action => action.type === 'strike').find(strike => strike.name === weaponName);

            let opts = await actor.getRollOptions(['all', 'damage-roll']);
            await strike.damage(null, opts);

            actor.unsetRollOption('damage-roll', 'finisher');
            
            // run the togglePanache macro.
            let togglePanache = game.macros.getName(toggleMacroName);
            togglePanache.execute();
            

        } else {
            ui.notifications.warn("This PC does not have Panache!");
        }
    } else {
        ui.notifications.warn("You must have a PC with the Confident Finisher feature selected.");
    }
})();