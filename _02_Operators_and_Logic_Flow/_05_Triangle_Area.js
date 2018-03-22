function triangleArea(sideA, sideB, sideC) {
    let a = Number(sideA);
    let b = Number(sideB);
    let c = Number(sideC);

    let p = (a + b + c)/2;
    let area = p*(p-a)*(p-b)*(p-c);
    let heron = Math.sqrt(area);

    console.log(heron.toFixed(10));
}
triangleArea(2, 3.5, 4)