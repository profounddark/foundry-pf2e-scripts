const introSound = "audio/fx/robot_intro.ogg";
const introText = "Welcome to the Celestial Menagerie. Please present your tickets for entry.";
const combatSound = "audio/fx/robot_attack.ogg";
const combatText = "Invalid ticket detected. Engaging in intruder suppression.";
const specialSound = "audio/fx/robot_special.ogg";
const specialText = "Dangerous behavior detected. Engaging in riot suppression.";


function playSound(soundName, speakText) {
    AudioHelper.play({ src: soundName, volume: 1.0, autoplay: true, loop: false }, true);
    ChatMessage.create({ speaker: ChatMessage.getSpeaker({ token: token }), content: speakText }, { chatBubble: true });
}

if (token && token.actor.name === "Mechanical Carny") {


    let talkBox = new Dialog({
        title: "Robot Talk Box",
        content: "<p>Select whether the Confident Finisher is a normal or critical success.</p>",
        buttons: {
            intro: {
                icon: '<i class="fas fa-mask"></i>',
                label: "Introduction",
                callback: () => (playSound(introSound, introText))
            },
            combat: {
                icon: '<i class="fas fa-skull-crossbones"></i>',
                label: "Initiate Combat",
                callback: () => (playSound(combatSound, combatText))
            },
            special: {
                icon: '<i class="fas fa-skull-crossbones"></i>',
                label: "Special Attack",
                callback: () => (playSound(specialSound, specialText))
            }
        },

        default: "intro"
    });
    talkBox.render(true);
} else {
    ui.notifications.warn("You must select a Mechanical Carny token.");
}
