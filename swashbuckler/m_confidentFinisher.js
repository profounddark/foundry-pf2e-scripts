const weaponName = "Powerful Fist";
const toggleMacroName = "Toggle Panache";
const panacheFlag = 'rollOptions.all.panache';

function togglePanache() {
    let toggleMacro = game.macros.getName(toggleMacroName);
    console.log(toggleMacro);
    return toggleMacro.execute();
}

async function strikeDamage(critical = false) {
    // Note: this is a workaround of actor.setRollOption
    const finisherFlag = 'rollOptions.damage-roll.finisher';
    // await actor.setFlag(game.system.id, finisherFlag, true);

    let strike = (actor.data.data.actions ?? []).filter(action => action.type === 'strike').find(strike => strike.name === weaponName);
    
    let opts = await actor.getRollOptions(['all', 'damage-roll']);
    opts.push("finisher");
    if (critical) {
        await strike.critical(null, opts);
    } else {
        await strike.damage(null, opts);
    }

    // await actor.setFlag(game.system.id, finisherFlag, false);

    togglePanache();
}

async function missDamage() {
    let dieNumber = Math.floor((actor.data.data.details.level.value + 7) / 4);
    let newRoll = new Roll(`floor(${dieNumber}d6 / 2)`);
    await newRoll.roll().toMessage({
        flavor: '<strong>Damage Roll: Confident Finisher</strong> (miss)', // can be safely omitted
        speaker: { actor: actor._id, alias: actor.name }, // can be safely omitted
      });
    togglePanache();
    
}

(async () => {
    // I added this for usability; basically, it checks to see if it's a PC and they have the Confident Finisher feature
    if (actor && actor.isPC && actor.items.find(entry => (entry.name === "Confident Finisher" && entry.type === "feat"))) {

        // this fetches to see if the PC has the Panache Effect added
        const hasPanache = await actor.getFlag(game.system.id, panacheFlag);

        if (hasPanache) {

            let strikeBox = new Dialog({
                title: "Confident Finisher",
                content: "<p>Select whether the Confident Finisher is a normal or critical success.</p>",
                buttons: {
                    normal: {
                        icon: '<i class="fas fa-fist-raised"></i>',
                        label: "Normal",
                        callback: () => (strikeDamage(false))
                    },
                    critical: {
                        icon: '<i class="fas fa-skull-crossbones"></i>',
                        label: "Critical",
                        callback: () => (strikeDamage(true))
                    },
                    miss: {
                        icon: '<i class="fas fa-times-circle"></i>',
                        label: "Miss",
                        callback: () => (missDamage())
                    }
                },

                default: "normal"
            });
            strikeBox.render(true);

        } else {
            ui.notifications.warn("This PC does not have Panache!");
        }
    } else {
        ui.notifications.warn("You must have a PC with the Confident Finisher feature selected.");
    }
})();