// ========================================= Local Modules Practical ======================================= //
// Yahan hum apne khud ke banaye hue Local Module ('calculator.js') ko IMPORT (require) karenge aur use karenge.

// 1. Apna banaya hua module laana
const myCalculator = require('./calculator.js');

const runLocalPractical = () => {
    console.log("Local Module Practical Shuru Ho Raha Hai...\n");

    const num1 = 50;
    const num2 = 10;

    console.log(`Numbers are: ${num1} and ${num2}\n`);

    // 2. Module ke andar ke functions ko use karna
    console.log("Addition: ", myCalculator.add(num1, num2));
    console.log("Subtraction: ", myCalculator.subtract(num1, num2));
    console.log("Multiplication: ", myCalculator.multiply(num1, num2));
    console.log("Division: ", myCalculator.divide(num1, num2));

    console.log("\n✅ Success: Hamara Local Module perfectly kaam kar raha hai!");
};

runLocalPractical();
