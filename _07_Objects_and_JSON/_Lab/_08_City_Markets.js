function cityMarkets(stringArray) {
    let map = new Map();

    for (let line of stringArray) {
        let tokens = line.split('->').filter(w => w != '').map(w => w.trim());
        let town = tokens[0];
        let product = tokens[1];
        let sales = tokens[2];
        let amountOfSales = sales.split(':').filter(w => w != '').map(w => w.trim());
        let quantity = Number(amountOfSales[0]) * Number(amountOfSales[1]);


        if(!map.has(town)){
            let productMap = new Map();
            productMap.set(product, quantity);
            map.set(town, productMap);
        }
        else{
            map.get(town).set(product,quantity);

        }

    }
    for (let [town, product] of map) {
        console.log(`Town - ${town}`);
        for (let [townProduct, quantity] of product) {
            console.log(`$$$${townProduct} : ${quantity}`);
        }
    }
}
cityMarkets(
['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
);