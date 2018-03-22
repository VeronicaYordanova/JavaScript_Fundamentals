function modifyAverage(number) {
    function calculateAverage(number) {
        let sum = 0;
        let numberString = number.toString();
        for (let i = 0; i < numberString.length; i++) {
            sum += Number(numberString.charAt(i))
        }

        return sum / numberString.length;
    }
    let average = calculateAverage(number);

    let addNine = x => x + "9";

    while(average <= 5){
        number = addNine(number);
        average = calculateAverage(number);
    }
    console.log(number);
}
modifyAverage(101)