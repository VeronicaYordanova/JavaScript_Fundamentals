function firstLastKElements(array) {
    let k = array.shift();
    console.log(array.slice(0, k).join(' '));
    console.log(array.slice(array.length-k,
        array.length).join(' '));
}
firstLastKElements([2,
    7, 8, 9])