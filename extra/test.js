{
    fort=<saves.fortitude.value>;
    concat(string(fort), " Fort")
}

{
    reflex=<saves.reflex.value>;
    concat(string(reflex), " Ref")
}

{
    will=<saves.will.value>;
    concat(string(will), " Will")
}

{
    percept=<attributes.perception.value>;
    concat(string(percept), " Perception")
}

{
    ac=<attributes.ac.value>;
    concat(string(ac), " AC")
}


{
    level=<details.level.value>;
    dc= level <= 21 ? (14 + level + floor(level / 3)): 42 + (level - 21) * 2;
    concat("DC ", string(dc))
}

{
    level=<details.level.value>;
    levelDC= level <= 21 ? (14 + level + floor(level / 3)): 42 + (level - 21) * 2;
    rarity=<traits.rarity.value>;
    rarityMod=compareText(rarity, "unique") == 1 ? 10: compareText(rarity, "rare") == 1 ? 5: compareText(rarity, "uncommon") == 1 ? 2: 0;
    finalDC = levelDC + rarityMod;
    concat("Recall DC ", string(finalDC)")
}

{
    <details.level.value>
}

{ hp=<attributes.hp.value>; hpm=<attributes.hp.max>; hp <= 0 ? "Defeated" : hp <= hpm/2 ? "Bloodied" : "Healthy" }