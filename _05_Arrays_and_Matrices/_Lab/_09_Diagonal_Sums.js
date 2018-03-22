function diagonalSums(matrix) {
    let sumOfMainDiagonal = 0;
    let sumOfSecondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumOfMainDiagonal += matrix[row][row];
        sumOfSecondaryDiagonal += matrix[row][matrix.length - row - 1];
        
    }
    console.log(sumOfMainDiagonal + ' ' + sumOfSecondaryDiagonal);
}
diagonalSums([[20, 40],
              [10, 60]]);