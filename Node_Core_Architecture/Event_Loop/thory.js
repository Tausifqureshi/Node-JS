// ========================================= Event Loop kya hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Node.js ek "Single-Threaded" architecture par chalta hai, yani iske paas sirf ek hi main thread (kaam karne wala hath) hota hai.
// Event Loop wo mechanism (engine) hai jo Node.js ko non-blocking I/O (ek sath kai asynchronous kaam) karne ki taqat deta hai, bhale hi wo single-threaded ho.

// ========================================= Core Components of Event Loop ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Interview me ye technical terms zaroor batayein:
// 1. Call Stack: Ye JavaScript ka main execution area hai. Jo bhi synchronous (normal) code hota hai, wo yahan execute hota hai. LIFO (Last In, First Out) rule pe kaam karta hai.
// 2. Node APIs (libuv): Jab bhi koi time-taking ya Asynchronous kaam aata hai, toh Call Stack us kaam ko Node APIs ko de deta hai. Isse main thread block nahi hota!
// 3. Callback Queue (Task Queue): Jab background me kaam pura ho jata hai, toh uska result (callback function) is Queue me aakar line me lag jata hai.
// 4. Microtask Queue: Ye Callback Queue se zyada VVIP (High Priority) hoti hai. Promises (.then/.catch) aur 'process.nextTick' ka code seedha isme jata hai.

const callStackExample = () => {
    console.log("=== Call Stack Ka Rule (Synchronous) ===");
    
    // Call stack LIFO pe kaam karta hai.
    const first = () => console.log("First executed (sabse andar/aakhir me thi)");
    const second = () => { first(); console.log("Second executed"); };
    const third = () => { second(); console.log("Third executed"); };
    
    third(); // Call order: Third -> Second -> First. Execute: First -> Second -> Third.
};
// callStackExample();


// ========================================= Event Loop Ka Asli Kaam (Priority Check) ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Event Loop hamesha check karta rehta hai ki kya "Call Stack" khali (empty) hai?
// Agar Call Stack khali hai, toh wo pehle "Microtask Queue" se tasks uthakar chalata hai.
// Jab Microtask Queue puri khali ho jati hai, tab wo "Callback Queue" se bache hue tasks ko Call Stack me bhejta hai.
// Note: Microtask Queue (Promises) hamesha Callback Queue (setTimeout) se pehle execute hoti hai.

const eventLoopPriorityExample = () => {
    console.log("\n=== Event Loop Priority Example ===");

    console.log("1. Normal Code (Sync) - Sabse pehle chalega (Kyunki ye Call Stack me hai)");

    // Ye Callback Queue (Macrotask) me jayega
    setTimeout(() => {
        console.log("4. setTimeout (Callback Queue) - Sabse aakhiri me chalega");
    }, 0);

    // Ye Microtask Queue me jayega (High Priority)
    Promise.resolve("Hello").then((res) => {
        console.log(`3. Promise (Microtask Queue) - ${res} mila, setTimeout se pehle chala!`); 
    });

    console.log("2. Normal Code (Sync) - Dusre number par chalega"); 
};
// eventLoopPriorityExample();
