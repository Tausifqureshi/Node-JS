// ========================================= calculator.js (Local Module) ======================================= //
// Ye ek local module hai jo maths ke functions banata hai.
// Hum in functions ko yahan banayenge aur export karenge taaki dusri file inko use kar sake.

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if(b === 0) return "Error: 0 se divide nahi kar sakte";
    return a / b;
};

// Exporting all functions (CommonJS Tarika)
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
