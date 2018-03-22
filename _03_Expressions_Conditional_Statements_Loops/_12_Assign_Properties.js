function properties(array) {
    let obj = {};
    let name = array[0];
    let age = array[2];
    let gender = array[4];
    obj[name] = array[1];
    obj[age] = array[3];
    obj[gender] = array[5];
    console.log(obj);
}
properties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
properties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);