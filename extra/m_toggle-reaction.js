const reactionEffect = "assets/macro_icons/reaction.svg"

async function toggleReaction(thisToken) {
    thisToken.toggleEffect(reactionEffect);
}

if (token) {
    toggleReaction(token);
}