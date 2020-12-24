const imageName = 'assets/macro_icons/counter-';
const imageFileType = ".svg";

function clearCounter(thisToken) {
    for (let i = 0; i < 10; i++) {
        const imageSource = imageName + i + imageFileType;
        thisToken.toggleEffect(imageSource, {active: false});
    }
}

function setCounter(count, thisToken) {
    clearCounter(thisToken);
    const imageSource = imageName + count + imageFileType;
    thisToken.toggleEffect(imageSource, {active: true});
}

if (token) {
    let buttonObject = {clear: { label: "Clear", callback: () => clearCounter(token)}};
    for (let i = 0; i < 10; i++) {
        buttonObject[i] = { label: i, callback: () => setCounter(i, token)};
    }
    let counterBox = new Dialog({
        title: "Token Counter",
        content: "<p>Select which token to apply.</p>",
        buttons: buttonObject,
        default: "clear"
    });
    counterBox.render(true);
}