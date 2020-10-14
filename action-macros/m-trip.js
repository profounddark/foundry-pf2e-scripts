if (actor && actor.isPC) {
    const options = actor.getRollOptions(['all', 'str-based', 'skill-check', 'athletics']);
    options.push("trip");
    options.push("attack");
    actor.data.data.skills.ath.roll(event, options);
} else {
    ui.notifications.warn("You must select a PC to use this Skill Action Macro.");
}