# Extra Stuff

This folder is just for bizarre and extra stuff that doesn't have any particular application outside of whatever I intended.

## Supported Versions

These scripts were written for FoundryVTT 0.7.5 with PF2E version 1.10.15.2210.

## Usage

### NPC/Monster Raise Shield

I wrote my own macro for NPCs raising their shield. NPCs are structured differently, so the existing macro didn't quite work (at least for me).

Instead of relying on the creature having a shield item, it just look at the shield data on the NPC card. If it does, it adds a custom modifier for the shield AC amount, adds a shield icon to the token, and sets a flag on the NPC actor. If the shield is already raised, it clears the modifier, removes the icon, and unsets the flag.

There are two versions of the macro: [m_monster-shield.js](./m_monster-shield.js) and [m_monster-shield-alt.js](./m_monster-shield-alt.js). The first one, without the -alt, was designed to be used on a selection of monsters. You drag-and-select a group of monsters and run the macro, causing all of them to raise their shields. The -alt version is only for a single creature. I built this one to use from the Token Action HUD, so (when I have the monster selected) I can just go to the Actions tab and click "NPC Toggle Shield."

### Macro: Toggle Skin Suit

**NOTE:** This has not been updated in a while. I'm leaving it here for "posterity," but I don't recommend using it blind.
 
This folder contains a single file: [m_toggleSkinSuit.js](./m_toggleSkinSuit.js). It is a macro for toggling the image/appearance of a monster token. It was built for the Vermlek (Worm Demon) in the first module of the Extinction Curse Adventure Path.

In short, it works two ways:
1. If the Worm Demon token "looks" like the Prototype, it changes its appearance, adds the +3 circumstance AC bonus, and changes its name.
2. If the Worm Demon token is in the "skin suit" mode, it changes it back to look like the prototype, removes the circumstance AC bonus, and plays a sound effect.

I tried making rule elements for this, but I discovered that (at the time), rule elements don't quite work as expected on NPCs. Maybe later.

### Random Rule Elements
I have made a few random rule elements here and there. I'm mostly leaving them here in case somebody wants to look at them for reference.
* Wetlander Lizardfolk: [rule_wetlander.json](./rule_wetlander.json)
* Bless Effect: [rule_bless.json](./rule_bless.json)
