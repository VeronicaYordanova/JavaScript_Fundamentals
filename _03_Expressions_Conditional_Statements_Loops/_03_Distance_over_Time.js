function distanceOverTime(array) {
    let speedOfFirstObject = Number(array[0]);
    let speedOfSecondObject = Number(array[1]);
    let timeInSeconds = Number(array[2]);

    let timeInHours = timeInSeconds/60/60;

    let distanceFirstObject = speedOfFirstObject * timeInHours;
    let distanceSecondObject = speedOfSecondObject * timeInHours;

    let delta = Math.abs((distanceFirstObject - distanceSecondObject)*1000);

    console.log(delta);

}
distanceOverTime([11, 10, 120])