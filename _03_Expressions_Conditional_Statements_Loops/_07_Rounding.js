function rounding(array) {

    let number = Number(array[0]);
    let precision = Number(array[1]);

    if (precision > 15) {
        precision = 15;
    }

    let x = number.toFixed(precision);
    console.log(+x);
}
rounding([10.5, 3])