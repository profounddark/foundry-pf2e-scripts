const protoTokenName = "Worm Demon";

const skinName = "Gravedigger";
const imageName = "assets/tokens/townsman01.png";

const burstSound = "audio/fx/gore_sound.mp3";

let selectedTokens = canvas.tokens.controlled;

if (selectedTokens.length < 1) {
    ui.notifications.warn("You must select at least 1 token.");
} else {
    let madeChange = false;
    for (let thisToken of selectedTokens) {
        // this is a worm demon
        if (thisToken.actor.data.token.name == protoTokenName) {
            if (thisToken.name == thisToken.actor.data.token.name) {
                // token is set to the prototype token
                await thisToken.actor.addCustomModifier('ac', 'Skin Suit', 3, 'circumstance');
                await thisToken.update({"name": skinName, "img": imageName});

                // here I'm updating the actor associated with the token; I did this because I use a module that shows the image of the
                // speaker in the chat log, but it's based on the ACTOR image, not the token. So, this is a work-around.
                await thisToken.actor.update({"name": skinName, "img": imageName});

                ChatMessage.create({speaker: ChatMessage.getSpeaker({token: thisToken}), content: `The Vermlek adopts the skin of ${skinName}.`});
            } else {
                // token is NOT set to prototype token
                let name = thisToken.name;
                await thisToken.actor.removeCustomModifier('ac', 'Skin Suit');
                await thisToken.actor.update({"img": thisToken.actor.data.token.img});
                await thisToken.update({"name": thisToken.actor.data.token.name, "img": thisToken.actor.data.token.img});
                ChatMessage.create({speaker: ChatMessage.getSpeaker({token: thisToken}), content: `A grotesque worm bursts forth from the body of ${name}!`});
                
                // the Vermlek gains hitpoints when it sheds it's skinsuit.
                let hp = thisToken.actor.data.data.attributes.hp.value;
                let newHP = Math.min(hp+10, thisToken.actor.data.data.attributes.hp.max);
                thisToken.actor.update({"data.attributes.hp.value": newHP});
                
                // play the sound!
                AudioHelper.play({src: burstSound, volume: 1.0, autoplay: true, loop: false}, true);
            }

            madeChange = true;
        }
    }
    if (!madeChange) {
        ui.notifications.warn(`This macro only works on ${protoTokenName} tokens. Please try again.`);
    }
}