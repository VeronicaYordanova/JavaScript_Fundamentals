function compoundInterest(array) {
    let p = Number(array[0]);
    let i = Number(array[1]) / 100;
    let n = 12/ Number(array[2]);
    let t = Number(array[3]);

    let f = p * (Math.pow((1 + (i/n)), (n * t)));
    console.log(f.toFixed(2));


}
compoundInterest([1500, 4.3, 3, 6])