const calculate = (a, b, operation) => {
    if (operation === '+') {
        return a + b;
    } else if (operation === '/') {
        return a / b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else {
        return 'error';
    }
}
    
(calculate(5, 3, '+'));
(calculate(3, 3, '/'));


const calculate2 = (a, b, operation) => {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'error';
    }
}

(calculate2(5, 3, '+'));
(calculate2(3, 3, '/'));