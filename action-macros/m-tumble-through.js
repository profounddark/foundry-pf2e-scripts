if (actor) {
    const { acr } = actor.data.data.skills;

    const label = 'Tumble Through: Acrobatics';
    const check = new PF2CheckModifier(label, acr, []);

    const options = actor.getRollOptions(['all', 'dex-based', 'skill-check', 'acrobatics']);
    options.push("tumble-through");

    const context = {
        actor: actor,
        type: 'skill-check',
        options: options,
    };
    PF2Check.roll(check, context, event);
}
