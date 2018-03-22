function lastMonth(array) {
    let day = array[0];
    let month = array[1];
    let year = array[2];

    let date = new Date(year, month - 1);

    date.setDate(0);

    console.log(date.getDate());

}
lastMonth([17, 3, 2012])