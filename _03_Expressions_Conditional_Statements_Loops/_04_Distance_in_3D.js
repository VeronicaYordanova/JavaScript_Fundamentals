function distanceIn3D(array) {
    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let z1 = Number(array[2]);
    let x2 = Number(array[3]);
    let y2 = Number(array[4]);
    let z2 = Number(array[5]);


    let distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2) + Math.pow((z2 - z1),2));
    console.log(distance);
}
distanceIn3D([3.5, 0, 1, 0, 2, -1])