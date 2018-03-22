function populationInTowns(stringArray) {
    let map = new Map();

    for (let row of stringArray) {
        let tokens = row.split('<->');
        let town = tokens[0];
        let population = Number(tokens[1]);

        if (map.has(town)) {
            map.set(town, map.get(town) + population);
        }
        else {
            map.set(town, population);
        }
    }
    for (let key of map) {
        console.log(`${key[0]}: ${key[1]}`)
    }

}
populationInTowns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 100']
)