// --------------------------------------------- Event Loop in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Event Loop kya hai?
// Node.js ek "Single-Threaded" architecture par chalta hai, yani iske paas sirf ek hi main thread (kaam karne wala hath) hota hai.
// Event Loop wo mechanism (engine) hai jo Node.js ko non-blocking I/O (ek sath kai asynchronous kaam) karne ki taqat deta hai, bhale hi wo single-threaded ho.

// --------------------------------------------- Core Components of Event Loop --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Interview me ye technical terms zaroor batayein:

// 1. Call Stack:
// Ye JavaScript ka main execution area hai. Jo bhi synchronous (normal) code hota hai, wo yahan execute hota hai. Ye LIFO (Last In, First Out) rule pe kaam karta hai.

// 2. Node APIs (libuv / C++ Background Threads):
// Jab bhi koi time-taking ya Asynchronous kaam aata hai (jaise File read karna, API call karna, setTimeout), toh Call Stack us kaam ko Node APIs (background threads) ko de deta hai. Isse main thread block nahi hota!

// 3. Callback Queue (Task Queue):
// Jab background (libuv) me kaam pura ho jata hai, toh uska result (callback function) is Queue me aakar line me lag jata hai.

// 4. Microtask Queue:
// Ye Callback Queue se zyada VVIP (High Priority) hoti hai. Promises (.then/.catch) aur 'process.nextTick' ka code seedha Microtask Queue me jata hai.

// --------------------------------------------- Event Loop Ka Asli Kaam --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> 
// Event Loop hamesha check karta rehta hai ki kya "Call Stack" khali (empty) hai?
// Agar Call Stack khali hai, toh wo pehle "Microtask Queue" se tasks uthakar chalata hai.
// Jab Microtask Queue puri khali ho jati hai, tab wo "Callback Queue" se bache hue tasks ko Call Stack me bhejta hai.
// Note: Microtask Queue (Promises) hamesha Callback Queue (setTimeout) se pehle execute hoti hai, iski priority zyada hoti hai.
