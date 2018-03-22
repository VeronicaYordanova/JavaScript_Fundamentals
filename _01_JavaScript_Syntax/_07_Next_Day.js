function nextDay(year, month, day) {
    let date = new Date(year, month-1, day);

    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    let next = nextDate.getFullYear() + "-" +
        (nextDate.getMonth() + 1) + '-' +
        nextDate.getDate();

    console.log(next);


}
nextDay(2016, 9, 30)