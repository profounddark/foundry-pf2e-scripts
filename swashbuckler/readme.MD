# Swashbuckler Panache

These scripts are intended to make the Swashbuckler Panache work in FoundryVTT. It's still very preliminary; basically, it's just enough to make it work for the player at my table that's a Swashbuckler.

## Supported Versions

These scripts were written for FoundryVTT 0.6.6 with PF2E version 1.10.14.2139.

## Usage

This folder contains four files: two .JS files corresponding to Macros and seven .JSON files corresponding to Rules Elements for Class Feature Items. The seven Rule Elements could all be placed on the same item, but I recommend placing them on their respective class features (see below).

### Creating the Effect Item

**NOTE: This requires activating the "Advanced Rules Element UI" in the System Settings.**

To implement Panache, you need to add "rule elements" to an Item on the character. As different rules technically come from different Class Features, I've broken it down that way. The easiest way to implement this system is to add the following Class Features to your Swashbuckler character: Panache, Precise Strike, and Gymnast Style (for Gymnast Swashbucklers). In the Character sheet, go to the Class Features section and edit each one. On the Rule Elements tab, you'll want to add the rules from the following files:

* For the Panache feature, add [rule-panache-1.json](./rule-panache-1.json), [rule-panache-2.json](./rule-panache-2.json), and [rule-panache-3.json](./rule-panache-3.json). This adds a "Panache" toggle box to the Actions section of the Character sheet; toggling Panache on will add a bonus to the Swashbuckler's speed (based on their level) and adds a +1 bonus to Acrobatics for Tumble Through checks.
* For the Precise Strike feature, add [rule-precise-strike-1.json](./rule-precise-strike-1.json) and [rule-precise-strike-2.json](./rule-precise-strike-2.json). These rules add the precise strike damage when Panache is toggled on (and the bonus dice when a separate "finisher" flag is active).
* For the Gymnast Style feature, add [rule-gymnast-1.json](./rule-gymnast-1.json). This will add a +1 bonus to Athletics that is available if you Shift-click the Athletics skill (similar to the +1 to Acrobatics).
* For the Vivacious Speed feature, add [rule-vivacious-speed-1.json](./rule-vivacious-speed-1.json). This will add the bonus to base speed (equal to half of the Panache bonus) when the Swashbuckler does NOT have Panache.

![Image of the Panache Toggle](./panache-toggle.png)

If you added these changes to a custom Item, don't forget to add the Item to the PC. Once complete, you will see a Panache toggle in the Actions tab of the character sheet and a Precise Strike bonus to damage when you make finesse or agile attacks.

### Using the Toggle Panache Macro

The [m_togglePanache.js](./m_togglePanache.js) script is used as a convenient way to toggle Panache on and off. It also adds an Effect indicator on the Token and creates a Chat Message indicating the addition or removal of Panache. Create a macro in FoundryVTT and copy the text of the file into the Macro box. Make sure that it is set to *script* macro and not *chat* macro.

There is one option that you can change at the top of the script: *imagePath*. *imagePath* is the path in your FoundryVTT assets folder to the image you want to use on the token to represent that the character has Panache. I have included the image I use (a luchador mask) if you want to use it. Just copy it to the appropriate location in your assets folder.

Once you have set those two options, the macro should correctly toggle Panache on and off. When it is on, you should see an Effect icon on the character token and the Panache toggle active on the Actions tab of the character sheet. If you don't mind toggling Panache from the character sheet, the macro is unnecessary.

### Using the Confident Finisher Macro

The script [m_confidentFinisher.js](./m_confidentFinisher.js) is used to have the character roll the damage for their Confident Finisher attack. It requires that Panache be active. Create a new macro and copy the contents of the file the Macro box. Make sure that it is set to *script* macro and not *chat* macro.

There are three options that you can change at the top of the script: *weaponName*, and *toggleMacroName*. *weaponName* is the name of the specific weapon to be used with the Confident Finisher. At this time, this macro does not support using different weapons (although it could be changed at play time to accomodate that). For example, if the player is using a weapon named "Awesome Rapier," just change the value of *weaponName* accordingly. *toggleMacroName* is the name that you gave to the **Toggle Panache** Macro, above. It defaults to "Toggle Panache," but if you call your macro something different, change the name accordingly. This is used at the end of the Confident Finisher to remove Panache at the end of the attack.

## Planned Updates

1. [COMPLETED] Add a dialogue box to the Confident Finisher so the user can select normal damage, critical damage, or miss.
2. Add support for the Precise Finisher Feat.
3. [COMPLETED] Update for use with Toggle Rule Element.
4. Update Confident Finisher to not rely on toggle macro.
5. Add support for other Swashbuckler Styles.