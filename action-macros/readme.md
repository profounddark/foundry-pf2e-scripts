# Skill Action Macros

These scripts allow for a way to let the player make specific Skill Action Checks (i.e., Trip, Grapple, Tumble Through) and include bonuses predicated from rule elements. These were specifically designed with my Swashbuckler Rule Elements, but could be expanded to others.

## Supported Versions

These scripts were written for FoundryVTT 0.6.6 with PF2E version 1.10.13.2079.

## Usage

There are only three macros right now: [m-tumble-through.js](m-tumble-through.js); [m-trip.js](m-trip.js); and [m-grapple.js](m-grapple.js). These correspond to the three actions: Tumble Through, Trip, and Grapple. All they do is roll the appropriate skill check but add a "roll option" associated with that action. For example, the Tumble Through macro rolls an Acrobatics check but adds the _tumble-through_ roll option to it. If there is something on the character that adds a bonus based on the _tumble-through_ roll option, it will be included.

The best example (right now) is the Panache Rule Element, which adds a +1 bonus to Tumble Through checks. If you have Panache toggled on and run the Tumble Through macro, you will see a +1 bonus added to the roll for Panache.

I implemented them by creating a Macro Compendium and then adding that compendium to one of the Token Action HUD menus.

## Planned Updates

1. Add more Actions as I need them.
2. If Action Macros (or equivalent) are added to the PF2E system, integrate these into their associated Actions.