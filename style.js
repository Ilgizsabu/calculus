const calculate = (a, b, result) => {
    if (result === '+') {
        return a + b;
    } else if (result === '/') {
        return a / b;
    } else if (result === '-') {
        return a - b;
    } else if (result === '*') {
        return a * b;
    } else {
        return 'error';
    }
}
    
(calculate(5, 3, '+'));
(calculate(3, 3, '/'));