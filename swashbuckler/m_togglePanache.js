const imagePath = "assets/macro_icons/luchador.svg";
const panacheFlag = 'rollOptions.all.panache';

async function togglePanache() {

    if (actor && actor.isPC) {
        let isPanache = await actor.getFlag(game.system.id, panacheFlag);

        if (isPanache === undefined) {
            // it's undefined, i.e., they don't have the Panache toggle
            ui.notifications.warn("You must have a PC with the Panache feature selected.");
        } else if (isPanache === false) {
            // it's false, so set it
            await actor.setFlag(game.system.id, panacheFlag, true);

            // and send the chat message
            ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: `The Great ${actor.name} has Panache!` }, { chatBubble: true });

            // if the token doesn't have the panache status icon, ad it.
            if (!token.data.effects.includes(imagePath)) {
                token.toggleEffect(imagePath);
            }
        } else if (isPanache === true) {
            // it's true, so clear it
            await actor.setFlag(game.system.id, panacheFlag, false);

            // make a message saying it no longer has Panache
            ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: `The Great ${actor.name} no longer has Panache!` }, { chatBubble: true });

            // if it has the token has the panache status icon, remove it
            if (token.data.effects.includes(imagePath)) {
                token.toggleEffect(imagePath)
            }

        }
    } else {
        ui.notifications.warn("This macro only works with PC Actors.");
    }

}

togglePanache();