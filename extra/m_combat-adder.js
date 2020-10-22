/**
 * Takes all selected tokens and adds them to the combat tracker. Then rolls initative for all NPC tokens.
 */

async function addToCombat(tokenArray) {
  for ( let theToken of tokenArray) {      
    if (theToken.inCombat === false){
        // adds the token to combat
        await theToken.toggleCombat();
    }
  }
  game.combat.rollNPC();
}

if (canvas.tokens.controlled.length > 1){
    addToCombat(canvas.tokens.controlled);
} else {
    console.log("You must have tokens selected to add them to the combat!");
}
