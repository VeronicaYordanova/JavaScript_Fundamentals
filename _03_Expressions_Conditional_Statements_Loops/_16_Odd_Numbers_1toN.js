function oddNumbers1toN(number) {
    let n = Number(number);

    for (let i = 1; i <= n; i++) {
       if(i % 2 == 1){
           console.log(i)
       }
    }
}
oddNumbers1toN(5)