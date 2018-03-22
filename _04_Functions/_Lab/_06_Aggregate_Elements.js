function aggregateElements(input) {
    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1 / b);
    aggregate(input, '', (a, b) => a + b);

    function aggregate(array, val, func) {
        for (let i = 0; i < array.length; i++)
            val = func(val, array[i]);
            console.log(val);
     }
}
aggregateElements([1, 2, 3])