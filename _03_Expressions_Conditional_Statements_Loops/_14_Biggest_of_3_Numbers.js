function biggestNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);

    console.log(Math.max(firstNumber, secondNumber, thirdNumber));

}
biggestNumber([5, -2, 7])