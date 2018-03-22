function heroicInventory(stringArray) {
    let heroData = [];
    for (let line of stringArray) {
        let tokens = line.split(/[^A-Za-z0-9]/).filter(w => w != '').map(w => w.trim());
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let items = tokens.slice(2);

        heroData.push({
            "name": heroName,
            "level": heroLevel,
            "items": items
        })
    }
    console.log(JSON.stringify(heroData));
}
heroicInventory(
['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);