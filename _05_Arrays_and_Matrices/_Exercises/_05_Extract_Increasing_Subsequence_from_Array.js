function extractIncreasingSubsequence(input) {

    let currentBiggestNum = Number.NEGATIVE_INFINITY;
    let arraySize = input.length;

    for(let i=0; i<arraySize; i++) {
        let currentNumber = input.shift();
        if(currentNumber >= currentBiggestNum) {
            currentBiggestNum = currentNumber;
            console.log(currentNumber);
        }
    }
}
extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])