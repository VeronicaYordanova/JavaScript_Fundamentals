function rotateArray(input) {
    let amountOfRotation = Number(input[input.length - 1]);
    input.pop();

    for (let i = 0; i < amountOfRotation; i++) {
        input.unshift(input.pop())
    }
    console.log(input.join(" "));
}
rotateArray([1, 2, 3, 4, 2]);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', 15]);
