const rageSound = "audio/fx/godzilla-roar.mp3";
const effectNames = ["Effect: Draconic Rage", "Effect: Fury Rage"];
const rageNames = {
  "Dragon Instinct": "Effect: Draconic Rage",
  "Fury Instinct": "Effect: Fury Rage"
};
const imagePath = "assets/macro_icons/mighty-force.svg";


(async () => {
  if (actor && actor.isPC) {
    const barbarianInstinct = actor.items.find(entry => Object.keys(rageNames).includes(entry.name));
    if (barbarianInstinct) {
      
      let rageItem = rageNames[barbarianInstinct.name];
      // this finds the rage item, if the PC has it
      let rageEffect = actor.items.find(entry => entry.name === rageItem);

      if (rageEffect) {
        // if the actor is in rage, delete the rage
        await actor.deleteOwnedItem(rageEffect._id);

        ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: `The mighty ${actor.name} is no longer in a rage!` }, { chatBubble: true });

        if (token.data.effects.includes(imagePath)) {
          token.toggleEffect(imagePath);
        }
      } else {
        // else if the actor is not in Rage, add Rage
        await actor.createOwnedItem(game.items.getName(rageItem));

        ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: `The mighty ${actor.name} is in a rage!` }, { chatBubble: true });

        // this line plays the sound effect. Delete it if you don't want a sound effect.
        AudioHelper.play({ src: rageSound, volume: 1.0, autoplay: true, loop: false }, true);

        if (!token.data.effects.includes(imagePath)) {
          token.toggleEffect(imagePath)
        }
      }
    } else {
      ui.notifications.warn("Your PC must have a Barbarian Instinct feature added to the Character Sheet.");
    }
  } else {
    ui.notifications.warn("You must have a PC with a Barbarian Instinct feature selected.");
  }
})();


