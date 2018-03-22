function primeNumberChecker(num) {

        let prime = true;
        for(let i = 2; i < Math.sqrt(Number(num)); i++) {
            if(num % i == 0) {
                prime = false;
                break;
            }

        }
        return prime && (num > 1);

}
primeNumberChecker(7)