const weaponName = "Powerful Fist";
const effectName = "Effect: Panache";
const toggleMacroName = "Toggle Panache";

(async () => {
    if (actor && actor.isPC && actor.items.find(entry => (entry.name === "Confident Finisher" && entry.type === "feat"))) {
        const panacheEffect = actor.items.find(entry => (entry.name === effectName && entry.type === "effect"));

        if (panacheEffect) {

            // await actor.setRollOption("damage-roll", "finisher", true);
            // actor.data.flags.pf2e.rollOptions["damage-roll"].finisher = true;
            const flag = 'rollOptions.damage-roll.finisher';
            await actor.setFlag(game.system.id, flag, true);

            // await actor.toggleRollOption('damage-roll', 'finisher');
            console.log("toggled option");

            let strike = (actor.data.data.actions ?? []).filter(action => action.type === 'strike').find(strike => strike.name === weaponName);

            let opts = await actor.getRollOptions(['all', 'damage-roll']);
            console.log(opts);
            await strike.damage(null, opts);

            actor.unsetRollOption('damage-roll', 'finisher');
            
            let togglePanache = game.macros.getName(toggleMacroName);
            togglePanache.execute();
            

        } else {
            ui.notifications.warn("This PC does not have Panache!");
        }
    } else {
        ui.notifications.warn("You must have a PC with the Confident Finisher feature selected.");
    }
})();






