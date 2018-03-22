function cappyJuice(stringArray) {
    let result = {};
    let bottles = {};

    for (let line of stringArray) {
        let tokens = line.split('=>').filter(w => w != '').map(w => w.trim());
        let cappy = tokens[0];
        let value = Number(tokens[1]);

        if(!result.hasOwnProperty(cappy)){
            result[cappy] = value;
        }
        else{
            result[cappy] += value;

        }

        if (result.hasOwnProperty(cappy) && result[cappy] >= 1000) {
            bottles[cappy] = Math.floor(result[cappy]/1000);

        }

    }

    for(let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}


cappyJuice([
'Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)