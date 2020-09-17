const rageSound = "audio/fx/godzilla-roar.mp3";
const effectName = "Effect: Draconic Rage";
const imagePath = "assets/macro_icons/mighty-force.svg";

(async () => {
  if (actor && actor.isPC && actor.items.find(entry => (entry.name === "Rage" && entry.type === "feat"))) {
  
    // TODO: implement a thing that finds which type of rage they have and pull a different one
    let rageItem = effectName;
    
    // this finds the rage item, if the PC has it
    let rageEffect = actor.items.find(entry => entry.name === rageItem);
    
    if (rageEffect) {
      // if the actor is in rage, delete the rage
      await actor.deleteOwnedItem(rageEffect._id);

      ChatMessage.create({speaker: ChatMessage.getSpeaker({token: token}), content: `The mighty ${actor.name} is no longer in a rage!` }, {chatBubble: true});

      if (token.data.effects.includes(imagePath)) {
        token.toggleEffect(imagePath);
      }
    } else {
      // else if the actor is not in Rage, add Rage
      await actor.createOwnedItem(game.items.getName(rageItem));

      ChatMessage.create({speaker: ChatMessage.getSpeaker({token: token}), content: `The mighty ${actor.name} is in a rage!` }, {chatBubble: true});
      
      // this line plays the sound effect. Delete it if you don't want a sound effect.
      AudioHelper.play({src: rageSound, volume: 1.0, autoplay: true, loop: false}, true);

      if (!token.data.effects.includes(imagePath)) {
        token.toggleEffect(imagePath)
      }

    }
  } else {
    ui.notifications.warn("You must have a PC with the Rage feature selected.");
  }
})(); 


