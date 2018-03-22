function magicMatrices(input) {
   let isMagic = false;
   let sumOfFirstCol = 0;
   let sumRow = 0;

    for (let i = 0; i < input.length; i++) {
        let obj = input[i];
        sumOfFirstCol += obj[0];
    }

    for (let row = 0; row < input.length; row++) {
        sumRow = 0;

        for (var col = 0; col < input[row].length; col++) {
            sumRow += input[row][col];
        }

        if(sumRow === sumOfFirstCol) {
            isMagic = true;
        } else {
            isMagic = false;
            break
        }
    }

    console.log(isMagic);

}
// magicMatrices([[4, 5, 6],
//                [6, 5, 4],
//                [5, 5, 5]]);
// magicMatrices([[11, 32, 45],
//                [21, 0, 1],
//                [21, 1, 1]]);
magicMatrices([[1, 0, 0],
                 [0, 0, 1],
                 [0, 1, 0]]);