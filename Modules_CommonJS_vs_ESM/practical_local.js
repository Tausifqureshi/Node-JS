// ========================================= Local Modules Practical ======================================= //
// Yahan hum apne khud ke banaye hue Local Module ('calculator.js') ko alag-alag tarike se IMPORT karenge.

const num1 = 50;
const num2 = 10;

const runLocalPractical = () => {
    console.log("=== Local Module Practical Shuru ===\n");
    console.log(`Numbers are: ${num1} and ${num2}\n`);

    // ========================================================================================= //
    // TARIKA 1: Old Style (CommonJS) - Pura Dabba (Object) Import Karna
    // ========================================================================================= //
    const myCalculator = require('./calculator.js');
    console.log("--- 1. Pura Dabba (Object) Import ---");
    console.log("Addition: ", myCalculator.add(num1, num2));
    console.log("Subtraction: ", myCalculator.subtract(num1, num2));


    // ========================================================================================= //
    // TARIKA 2: Old Style (CommonJS) - Destructuring (Sirf zaroorat ka function bahar nikalna)
    // ========================================================================================= //
    // Is tarike se bhi import kar sakte hain (Destructuring)
    const { multiply, divide } = require('./calculator.js');
    console.log("\n--- 2. Destructuring Se Import ---");
    // Ab 'myCalculator.multiply' likhne ki zaroorat nahi, seedha 'multiply' use kar sakte hain
    console.log("Multiplication: ", multiply(num1, num2));
    console.log("Division: ", divide(num1, num2));


    // ========================================================================================= //
    // TARIKA 3: New Style (ES Modules) - React Jaisa (Modern Tarika)
    // ========================================================================================= //
    // Note: Ye tarika tabhi chalega jab package.json me "type": "module" likha ho.
    // Abhi ke liye ye bas sikhne ke liye commented hai:
    
    /*
    import { add, subtract } from './calculator.js';
    
    console.log("\n--- 3. New Style (ES Modules) ---");
    console.log("Addition: ", add(num1, num2));
    */

    console.log("\n✅ Success: Hamara Local Module har tarike se perfectly kaam kar raha hai!");
};

runLocalPractical();
