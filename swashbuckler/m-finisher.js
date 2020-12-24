const weaponName = "Powerful Fist";


async function strikeDamage(critical = false) {
    let strike = (actor.data.data.actions ?? []).filter(action => action.type === 'strike').find(strike => strike.name === weaponName);
    let opts = await actor.getRollOptions(['all', 'damage-roll']);
    opts.push("finisher");
    if (critical) {
        await strike.critical(event, opts);
    } else {
        await strike.damage(event, opts);
    }

}

strikeDamage(true);