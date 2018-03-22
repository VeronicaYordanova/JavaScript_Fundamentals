function addAndRemoveElements(input) {
    let number = 1;
    let result = [];

    for (let command of input) {
        if(command == 'add'){
            result.push(number);
        }
        else{
            result.pop();
        }
        number++;
    }

    if(result.length == 0){
        console.log("Empty");
    }
    else{
        for (let element of result) {
            console.log(element);
        }
    }
}
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);