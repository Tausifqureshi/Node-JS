// --------------------------------------------- Callbacks, Promises, aur Async/Await --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Node.js me Asynchronous code handle karne ke tarike.

// --------------------------------------------- 1. Callbacks --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Callbacks kya the?
// Ye purana tarika tha. Ek function jo kisi doosre function me as a parameter pass kiya jata hai. 
// Jab asyn task pura hota hai, toh Node ye function chala deta tha.
// Problem: Isme "Callback Hell" ban jata tha (ek ke andar dusra callback) jisse code ko padhna aur error handle karna bahut mushkil ho jata tha.

// --------------------------------------------- 2. Promises --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Promises ne problem kaise solve ki?
// Promise ek object hota hai jo future me aane wali value ko represent karta hai. Iski 3 states hoti hain:
// - Pending: Kaam chal raha hai.
// - Fulfilled (Resolved): Kaam successfully ho gaya.
// - Rejected: Kaam me koi error aa gaya.
// Isme hum .then() ka use karte hain success ke liye aur .catch() ka use karte hain error ke liye. Isse callback hell wali problem solve hui, code clean hua.

// --------------------------------------------- 3. async/await --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Ye kya hai aur kyu best hai?
// Ye Promises ke upar ek "syntactic sugar" hai. Isne asynchronous code ko synchronous code jaisa likhne ka asaan tarika diya.
// - 'async' keyword function ke aage lagane se wo function Promise return karta hai.
// - 'await' us Promise ka result aane tak line ko wahin rok deta hai (without blocking the whole Node process).
// Ye sabse modern aur clean tarika hai, aur errors pakadne ke liye hum 'try...catch' block ka use karte hain.
