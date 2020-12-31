const check = new PF2CheckModifier('Perception Check', actor.data.data.attributes.perception, [
    new PF2Modifier('Paranoid', 4, 'status'),
    new PF2Modifier('Keen Eyes', 2, 'status'),
    new PF2Modifier('Smoke in Eyes', -1),
  ]);
  const options = [];
  const context = {
    actor: actor,
    type: 'perception-check',
    options: options,
  };
  const callback = (result) => { console.log(result); }; // optional
  PF2Check.roll(check, context, event, callback);