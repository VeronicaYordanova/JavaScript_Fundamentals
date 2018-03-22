function townToJson(strArray) {
    strArray.shift();
    let towns = [];

    for (let row of strArray) {
        let townTokens = row.split('|')
             .filter(element => element !== '')
             .map(element => element.trim());

        let townObj = {
            Town: townTokens[0],
            Latitude: Number(townTokens[1]),
            Longitude: Number(townTokens[2])
        };
        towns.push(townObj);

    }
    return JSON.stringify(towns);
}
console.log(townToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));