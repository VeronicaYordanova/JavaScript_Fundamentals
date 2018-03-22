function lowestPriceInCity(stringArray) {
    let map = new Map();
    for (let line of stringArray) {
        let tokens = line.split('|').filter(w => w != '').map(w => w.trim());
        let townName = tokens[0];
        let productName = tokens[1];
        let productPrice = Number(tokens[2]);

        if(!map.has(productName)){
            let productMap = new Map();
            productMap.set(townName, productPrice);
            map.set(productName, productMap);
        }
        else{
            map.get(productName).set(townName, productPrice);
        }

    }
    for (let [product, valueMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = '';
        for (let [town, price] of valueMap) {
            if(price < lowestPrice){
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}
lowestPriceInCity(
['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);