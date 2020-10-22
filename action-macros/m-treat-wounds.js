function poop(html) {
    console.log(html);
}

async function treatWounds(medSkill) {
    console.log(medSkill);
    const stupidOptions = {
        width: 350,
        template: 'assets/template/alt-dialog.html'

    };

    let diaTreatWounds = new Dialog({
        title: 'Treat Wounds',
        content: 'PPoop in your mouth!',
        buttons: {
            yes: {
                icon: "<i class='fas fa-check'></i>",
                label: 'Treat Wounds'
            },
            no: {
                icon: "<i class='fas fa-times'></i>",
                label: "Cancel"
            }
        },
        default: "yes",
        close: html => poop(html)
    }, stupidOptions);
    await console.log(diaTreatWounds.getData());
    diaTreatWounds.render(true);
}



if (actor && actor.isPC) {
    const medSkill = actor.data.data.skills.med.rank;
    if (medSkill > 0) {
        treatWounds(medSkill);
    } else {
        // because it shouldn't even fire if the PC isn't trained in medicine!
        ui.notifications.warn(`${actor.name} is not trained in Medicine.`);
    }

} else {
    ui.notifications.warn("You must select a PC trained in Medicine to use Treat Wounds.");
}
