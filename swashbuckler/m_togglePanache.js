const effectName = "Effect: Panache";
const imagePath = "assets/macro_icons/luchador.svg";

(async () => {
  // checks to verify there is an actor (for GM), actor is a PC, and actor has the Panache feat/class feature
  if (actor && actor.isPC && actor.items.find(entry => (entry.name === "Panache" && entry.type === "feat"))) {
  
    // checks if the actor has the Panache effect item
    let panacheEffect = actor.items.find(entry => (entry.name === effectName && entry.type === "effect"));
    
    // if the actor DOES have the item
    if (panacheEffect) {
      // delete it
      await actor.deleteOwnedItem(panacheEffect._id);
      // make a message saying it no longer has Panache
      ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: `The Great ${actor.name} no longer has Panache!` }, { chatBubble: true });

      // if it has the token has the panache status icon, remove it
      if (token.data.effects.includes(imagePath)) {
        token.toggleEffect(imagePath)
      }
    } else {
      // else if the actor is not in Panache, add Panache
      await actor.createOwnedItem(game.items.getName("Effect: Panache"));
      // send a chat message
      ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: `The Great ${actor.name} has Panache!` }, { chatBubble: true });

      // if the token doesn't have the panache status icon, ad it.
      if (!token.data.effects.includes(imagePath)) {
        token.toggleEffect(imagePath)
      }

    }
  } else {
    ui.notifications.warn("You must have a PC with the Panache feature selected.");
  }
})(); 


