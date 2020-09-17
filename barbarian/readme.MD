# Barbarian Rage

These scripts are intended to make the Barbarian Rage work in FoundryVTT. It's still very preliminary; basically, it's just enough to make it work for the player at my table that's a Barbarian.

## Supported Versions

These scripts were written for FoundryVTT 0.6.6 with PF2E version 1.10.10.1973.

## Usage

This folder contains five files: one .JS files corresponding to the Macro to toggle Rage and four .JSON files corresponding to Rules Elements for an Effect Item. There's also a .JSON file containing the exported data for the Effect Item, in case you have trouble making your own.

### Creating the Effect Item

This macro set requires that a new Effect Item. Create a new Item of type Effect in the World's Item Directory. You can give it whatever name you'd like; I use "Effect: Draconic Rage" so it's clear to everybody what it is. In the Rule Element section, you need to add the four rules: [rule-barbarianRage-1.json](./rule-barbarianRage-1.json), [rule-barbarianRage-2.json](./rule-barbarianRage-2.json), [rule-barbarianRage-3.json](./rule-barbarianRage-3.json), and [rule-barbarianRage-4.json](./rule-barbarianRage-4.json). The first two rules add the damage bonus (for both agile and non-agile weapons). The third rule adds the AC penalty. The fourth rule adds temporary hit points.

**NOTE**: The rule here is set for the damage modifier associated with Draconic Rage. Other Rages may have different rules; I haven't gotten to those yet, so your results may vary.

With the Effect Item created, you can now add Draconic Rage to a PC by dragging the Item onto a PC Character Sheet. It will appear in the Effects Tab of the Character Sheet. With it added to the character, all of the effects will be applied to the character.

**NOTE**: I have also added an exported version of my Effect Item as well which you can import if you have trouble setting it up yourself. You can find that item here in the file [rage-effect-item.json](./rage-effect-item.json).

### Using the Toggle Rage Macro

The [m_togglePanache.js](./m_toggleRage.js) script is used as a convenient way to toggle the Barbarian Rage on and off. It also adds an Effect indicator on the Token and creates a Chat Message indicating the addition or removal of Panache. Create a macro in FoundryVTT and copy the text of the file into the Macro box. Make sure that it is set to *script* macro and not *chat* macro.

There are three options that you can change at the top of the script: *rageSound*, *effectName* and *imagePath*. *effectName* is the name of the Effect Item that you created before. If you named it "Effect: Panache" you will not need to change the script. However, if you named it something else, just change the value of *effectName*. *imagePath* is the path in your FoundryVTT assets folder to the image you want to use on the token to represent that the character has Rage. I used a variation of the [Mighty Force](https://game-icons.net/1x1/delapouite/mighty-force.html) icon from [game-icons.net](https://game-icons.net).

*rageSound* is the path to a sound effect that plays when the Barbarian enters a rage. My PC's barbarian is a lizardfolk with a very Godzilla aesthetic, so it plays a Godzilla road. You can change this as necessary (or remove it, if you'd like).

Once you have set those two options, the macro should correctly toggle Rage on and off. When it is on, you should see an Effect icon on the character token and the Rage Effect Item listed on the Character Sheet. I recommend that you use the macro to add and remove Rage, as it will remove both the Effect Item and the token icon.

## Planned Updates

1. Add support for different kinds of Rages.