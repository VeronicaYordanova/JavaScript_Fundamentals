function calculateSum(arrays) {

    let sum = 0;
    let vat = 0;
    let total = 0;

    for(i = 0; i < arrays.length; i++) {

        sum += arrays[i];
        vat = sum * 20 / 100;
        total = sum + vat;
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);

}
calculateSum([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);