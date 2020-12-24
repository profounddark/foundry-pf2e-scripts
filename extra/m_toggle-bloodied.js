const bloodiedEffect = "assets/macro_icons/spatter.svg"

async function toggleBloodied(thisToken) {
    thisToken.toggleEffect(bloodiedEffect, {overlay: true});
}

if (token) {
    toggleBloodied(token);
}