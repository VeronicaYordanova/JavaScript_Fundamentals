function areaAndPerimeter(sideA, sideB) {

    let a = Number(sideA);
    let b = Number(sideB);

    let area = a * b;
    let perimeter = 2*a + 2*b;

    console.log(+area.toFixed(2));
    console.log(+perimeter.toFixed(2));
}
areaAndPerimeter(2.5, 3.14)