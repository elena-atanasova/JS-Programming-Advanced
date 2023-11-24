function heroicInventory(input) {
    let heroes = [];
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : []; // if items is true, which means not empty
        
        heroes.push({ name, level, items });
    }
    
    let output = JSON.stringify(heroes);
    return output;
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);