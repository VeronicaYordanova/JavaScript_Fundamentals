function storeCatalogue(stringArray) {
    let map = new Map();

    for (let line of stringArray) {
        let tokens = line.split(':').filter(w => w != '').map(w => w.trim());
        let productName = tokens[0];
        let price = Number(tokens[1]);
        let firstLetter = productName.slice(0,1);



        if(!map.has(firstLetter)){
            let mapStore = new Map();
            mapStore.set(productName, price);
            map.set(firstLetter, mapStore);
        }
        else{
            map.get(firstLetter).set(productName,price);
        }
    }

    let mapAsc = new Map([...map.entries()].sort());

    for (let [key, value] of mapAsc) {
        console.log(key);
        let mapIn = new Map([...value.entries()].sort());
        for (let [product, priceOfProduct] of mapIn) {

            console.log(` ${product}: ${priceOfProduct}`);
        }

    }
}
storeCatalogue(
['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);