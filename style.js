const calculate = (a, b, result) => {
    if (result === '+') {
        return a + b
    } else if (result === '/') {
        return a / b
    } else if (result === '-') {
        return a - b
    } else if (result === '*') {
        return a * b
    } else {
        return 'error'
    }
}
    
console.log(calculate(5, 3, '+'));
console.log(calculate(3, 3, '/'));