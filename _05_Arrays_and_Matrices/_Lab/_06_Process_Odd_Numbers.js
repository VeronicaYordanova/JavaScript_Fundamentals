function processOddNumbers(array) {
    console.log(array.filter((num, index) => index % 2 == 1).map(num => num * 2).reverse().join(" "));

}
processOddNumbers([3, 0, 10, 4, 7, 3]);