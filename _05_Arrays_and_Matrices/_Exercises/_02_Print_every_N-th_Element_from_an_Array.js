function printEveryNthElement(input) {
    let N = input[input.length - 1];
    input.pop();

    input.filter((element, index) => index % N == 0).forEach(element => console.log(element));
}
printEveryNthElement([5, 20, 31, 4, 20, 2]);