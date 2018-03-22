function imperialUnits(input) {
    let inches = Number(input);
    let inchesToFeet = Math.floor(inches/ 12);
    let remainingInch = inches % 12;


    console.log(`${inchesToFeet}'-${remainingInch}"`)
}
imperialUnits(55)