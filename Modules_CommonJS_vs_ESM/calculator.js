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

// ========================================================================================= //
// TARIKA 1: Old Style (CommonJS) - Pura Dabba (Object) Export Karna
// ========================================================================================= //
// Yaha OLD TARIKA hai (By default Node.js yahi samajhta hai)
module.exports = {
    add,
    subtract,
    multiply,
    divide
};

// ========================================================================================= //
// TARIKA 2: New Style (ES Modules) - React Jaisa (Modern Tarika)
// ========================================================================================= //
// Note: Ye tarika tabhi chalega jab package.json me "type": "module" likha ho.
// Agar naya tarika use karna ho toh aise likhte hain (Har function ke aage 'export'):

/*
export const add = (a, b) => { return a + b; };
export const subtract = (a, b) => { return a - b; };
export const multiply = (a, b) => { return a * b; };
export const divide = (a, b) => { return a / b; };
*/
