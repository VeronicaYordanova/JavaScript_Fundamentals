function autoEngineeringCompany(stringArray) {

    let map = new Map();

    for (let line of stringArray) {
        let tokens = line.split('|').filter(w => w != '').map(w => w.trim());
        let brandOfCar = tokens[0];
        let modelOfBrand = tokens[1];
        let producedCar = Number(tokens[2]);

        if(!map.has(brandOfCar)){
            let secondMap = new Map();
            secondMap.set(modelOfBrand, producedCar);
            map.set(brandOfCar, secondMap);
        }
        else{
            if(map.get(brandOfCar).get(modelOfBrand)){
                let oldValueOfProduceCar = Number(map.get(brandOfCar).get(modelOfBrand));
                map.get(brandOfCar).set(modelOfBrand, oldValueOfProduceCar + producedCar);
            }
            else{
                map.get(brandOfCar).set(modelOfBrand, producedCar);
            }
        }

    }
    for (let [key, value] of map) {
        console.log(key);
        for (let [model, valueOfCar] of value) {
            console.log(`###${model} -> ${valueOfCar}`)
        }
    }
}
autoEngineeringCompany([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);