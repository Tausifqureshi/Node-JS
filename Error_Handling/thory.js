// --------------------------------------------- Error Handling in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Error Handling kyu zaroori hai?
// Agar hamare Node.js app me koi error aata hai aur humne use handle nahi kiya, toh pura server crash ho sakta hai. Isliye app ko stable rakhne ke liye error handling zaroori hai.

// --------------------------------------------- Error Handling ke Tarike --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Errors kaise pakde?
// 1. Synchronous Code me (Try/Catch):
// Hum try block me apna code likhte hain, agar koi problem aati hai, to error catch block me aa jata hai aur server crash hone se bach jata hai.

// 2. Promises me (.catch):
// Jab hum promises use karte hain, toh error handle karne ke liye hamesha chain ke end me .catch(err => ...) lagana chahiye.

// 3. async/await me (Try/Catch):
// Ye sabse zyada use hota hai. Pura async code try block me hota hai aur jo bhi promise reject hota hai, uska error catch block me aa jata hai.

// 4. Express.js / Middlewares (Global Error Handler):
// Jab hum web framework (jaise Express) use karte hain, toh ek "Global Error Handling Middleware" banate hain jo pure app me aane wale kisi bhi error ko ek hi jagah pe gracefully handle karta hai aur client ko proper message bhejta hai.
