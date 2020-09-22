# Extra Stuff

This folder is just for bizarre and extra stuff that doesn't have any particular application outside of whatever I intended.

## Supported Versions

These scripts were written for FoundryVTT 0.6.6 with PF2E version 1.10.10.1973.

## Usage

### Macro: Toggle Skin Suit

**NOTE**: I'm re-working this to support new rule elements. I'd hold off on this nonsense for now.
 
This folder contains a single file: [m_toggleSkinSuit.js](./m_toggleSkinSuit.js). It is a macro for toggling the image/appearance of a monster token. It was built for the Vermlek (Worm Demon) in the first module of the Extinction Curse Adventure Path.

In short, it works two ways:
1. If the Worm Demon token "looks" like the Prototype, it changes its appearance, adds the +3 circumstance AC bonus, and changes its name.
2. If the Worm Demon token is in the "skin suit" mode, it changes it back to look like the prototype, removes the circumstance AC bonus, and plays a sound effect.

### Rule: Wetlander Lizardfolk
This is a new rule for the Wetlander Lizardfolk Ancestry Heritage Item. It adds a base swim speed of 15ft to the character sheet. The rule can be added to an existing item by using the following rule data: [r_wetlander.json](./r_wetlander.json). In the alternative, you can import the entire Feat Item into your World, which can be found here: [wetlanderLizardfolk-featItem.json](./wetlanderLizardfolk-featItem.json).