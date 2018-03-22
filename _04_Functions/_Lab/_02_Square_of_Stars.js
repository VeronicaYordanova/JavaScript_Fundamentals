function squareOfStars(n) {
    function printSquare(count = n) {
        console.log("*" + " *".repeat(count-1));

    }

    for (let i = 1; i <= n; i++) {
        printSquare()

    }
}
squareOfStars(5)