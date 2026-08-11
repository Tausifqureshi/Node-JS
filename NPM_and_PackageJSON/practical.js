// ========================================= NPM Practical Example ============================================ //
// Is folder me agar aapko package.json dekhna hai to terminal me run karein:
// npm init -y
// Aur phir koi package install karke dekhein, jaise:
// npm install lodash

const _ = require("lodash");

// Lodash ka use karke array se duplicate values remove karna
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);

console.log("Original Array:", numbers);
console.log("Unique Array (using lodash):", uniqueNumbers);
