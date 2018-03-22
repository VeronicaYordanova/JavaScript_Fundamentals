function figureOf4Squares(n) {
   
    let counter = n - 2;

    let plus = '+';

    if (n == 2) {
        console.log(plus.repeat(3));
    }
    else {

        if (n % 2 == 0) {
            console.log('+' + '-'.repeat(counter) + '+' + '-'.repeat(counter) + '+');
            for (let i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log('+' + '-'.repeat(counter) + '+' + '-'.repeat(counter) + '+');
            for (let i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log('+' + '-'.repeat(counter) + '+' + '-'.repeat(counter) + '+');
        }
        else {
            console.log('+' + '-'.repeat(counter) + '+' + '-'.repeat(counter) + '+');
            for (let i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log('+' + "-".repeat(counter) + '+' + '-'.repeat(counter) + '+');
            for (let i = 0; i < n / 2 - 2; i++) {
                console.log('|' + " ".repeat(counter) + '|' + " ".repeat(counter) + '|');
            }
            console.log('+' + '-'.repeat(counter) + '+' + '-'.repeat(counter) + '+');
        }
    }
}
figureOf4Squares(5);