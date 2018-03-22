function cookingByNumber(input) {
    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        if(command == 'chop'){
            number = number / 2
            console.log(number);
        }
        if(command == 'spice'){
            number = number + 1;
            console.log(number);
        }

        if (command == 'dice'){
            number = Math.sqrt(number)
            console.log(number);
        }
        if (command == 'bake'){
            number = number * 3;
            console.log(number)
        }
        if (command == 'fillet'){
            number = number * 0.8;
            console.log(number);
        }
    }
}
//cookingByNumber(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);