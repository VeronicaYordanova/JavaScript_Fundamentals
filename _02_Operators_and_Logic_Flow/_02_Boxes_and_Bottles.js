function boxesAndBottles(firstNumber, secondNumber) {

    let numberOfBottles = Number(firstNumber);
    let numberOfBoxes = Number(secondNumber);

    let capacity = Math.ceil(numberOfBottles/ numberOfBoxes);

    console.log(capacity)
}
boxesAndBottles(20, 5)