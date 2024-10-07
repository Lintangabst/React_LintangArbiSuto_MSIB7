const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
};

console.log(calculator.add(2, 3));       
console.log(calculator.subtract(7, 2));  
console.log(calculator.multiply(3, 4));  
console.log(calculator.divide(8, 2));    
