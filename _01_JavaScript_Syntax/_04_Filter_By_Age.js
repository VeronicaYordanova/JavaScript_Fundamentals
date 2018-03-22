function filterByAge(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let filterAge = Number(minimumAge);
    let nameOfFirstPerson = firstPersonName;
    let ageOfFirstPerson = Number(firstPersonAge);
    let nameOfSecondPerson = secondPersonName;
    let ageOfSecondPerson = Number(secondPersonAge);

    if(ageOfFirstPerson >= filterAge){
        console.log(`{ name: '${nameOfFirstPerson}', age: ${ageOfFirstPerson} }`);
    }
    if(ageOfSecondPerson >= filterAge){
        console.log(`{ name: '${nameOfSecondPerson}', age: ${ageOfSecondPerson} }`);
    }
}
filterByAge(19, 'Pesho', 119, 'Gosho', 20)