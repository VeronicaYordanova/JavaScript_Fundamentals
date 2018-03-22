function validityChecker(array) {
    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let x2 = Number(array[2]);
    let y2 = Number(array[3]);

    let firstDistance = distance(x1, y1, 0, 0);
    let secondDistance = distance(x2, y2, 0, 0);
    let thirdDistance = distance(x1, y1, x2, y2);

    let isValidFirst = Number.isInteger(firstDistance) ? 'valid': 'invalid';
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValidFirst}`)

    let isValidSecond = Number.isInteger(secondDistance) ? 'valid': 'invalid';
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValidSecond}`)

    let isValidThird = Number.isInteger(thirdDistance) ? 'valid': 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidThird}`)

    function distance(x1, y1, x2, y2) {
        let d = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        return d;
    }
}
validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);