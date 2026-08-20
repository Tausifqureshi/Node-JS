// --------------------------------------------- Error Handling in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Error Handling Kyun Zaruri Hai?
// Node.js "Single-Threaded" hai. Iska matlab agar kisi ek user ki request par server me error (bug) aa gaya aur wo handle nahi hua, toh poora Node.js server crash ho jayega aur baaki sabhi users ke liye application band ho jayegi!
// Isliye errors ko "catch" karna (pakadna) aur gracefully handle karna backend me sabse zaruri chiz hai.

// --------------------------------------------- Error Handle Karne Ke Tarike --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->

// 1. Synchronous Code Me (try...catch):
// Agar normal synchronous code hai, toh hum `try { ... } catch(err) { ... }` block ka use karte hain. Agar `try` wale hisse me error aata hai, toh server crash hone ki bajaye `catch` block me chala jata hai aur hum us error ko aaram se handle kar sakte hain.

// 2. Asynchronous Promises Me (.catch):
// Jab hum Promises ka use karte hain, toh error pakadne ke liye chain ke end me `.catch(err => ...)` lagaya jata hai.

// 3. Modern Async/Await Me (try...catch):
// Async/Await sabse best hai kyunki isme hum asynchronous code ko bhi normal Synchronous code ki tarah `try...catch` block me likh sakte hain. Ye interview me sabse zyada practically poocha aur expect kiya jata hai.

// --------------------------------------------- Uncaught Exceptions --------------------------------------------- //
// Note:
// Agar galti se koi error handle hone se chhoot jaye (jise uncaught exception ya unhandled promise rejection kehte hain), toh Node.js ke 'process' object par global event listeners lagakar hum us crash ko record kar sakte hain aur server ko gracefully band ya restart kar sakte hain.
