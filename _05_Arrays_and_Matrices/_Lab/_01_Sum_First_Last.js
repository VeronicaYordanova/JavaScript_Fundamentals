function sumFirstLastElements(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let first = Number(array[0]);
        let last = Number(array[array.length - 1]);
        sum = first + last;

    }
    console.log(sum)
}
sumFirstLastElements(['5', '10', '60', '7', '5'])