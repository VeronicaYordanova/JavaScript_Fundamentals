function sumByTown(stringArray) {
    let towns = {};

    for (let i = 0; i < stringArray.length; i+=2) {
        let obj = stringArray[i];

        if(!towns.hasOwnProperty(obj)){
            towns[obj] = 0;
        }

        towns[obj] += Number(stringArray[i + 1]);
    }
    console.log(JSON.stringify(towns));
}
sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);