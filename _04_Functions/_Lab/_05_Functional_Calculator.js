function calculator(a, b, operator) {
    let calculate = function (a, b , operator) {
        return operator(a, b);
    }
    let sum = function (a, b) {
        return a + b;
    }
    let subtract = function (a, b) {
        return a - b;
    }
    let multiply = function (a, b) {
        return a * b;
    }
    let divide = function (a, b) {
        return a / b;
    }

    switch (operator){
        case '+':
            return calculate(a, b, sum);
        case '-':
            return calculate(a, b, subtract);
        case '*':
            return calculate(a, b, multiply);
        case '/':
            return calculate(a, b, divide);
    }

}
calculator(2, 4, '+')