function pointInRectangle(array) {
    let x = Number(array[0]);
    let y = Number(array[1]);
    let xMin = Number(array[2]);
    let xMax = Number(array[3]);
    let yMin = Number(array[4]);
    let yMax = Number(array[5]);

    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}
pointInRectangle([8, -1, 2, 12, -3, 3])