// ========================================= Event Loop Practical ============================================ //
// Event Loop ka execution order samajhne ke liye ek interview question example:

console.log("1. Console log (Synchronous - Call Stack me pehle aaya)");

setTimeout(() => {
  console.log("4. setTimeout (Macro Task - Task Queue me gaya aur sabse end me chalega)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise (Micro Task - Microtask Queue me gaya, setTimeout se pehle chalega)");
});

console.log("2. Console log (Synchronous - Call Stack me dusre number pe aaya)");

// Expected Output Order:
// 1
// 2
// 3 (Promises ki priority setTimeout se zyada hoti hai Event Loop me)
// 4
