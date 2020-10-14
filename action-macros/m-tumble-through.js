if (actor && actor.isPC) {
    const options = actor.getRollOptions(['all', 'dex-based', 'skill-check', 'acrobatics']);
    options.push("tumble-through");
    actor.data.data.skills.acr.roll(event, options);
} else {
    ui.notifications.warn("You must select a PC to use this Skill Action Macro.");
}