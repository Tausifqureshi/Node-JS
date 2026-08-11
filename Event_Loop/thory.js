// --------------------------------------------- Event Loop in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Event Loop kya hota hai?
// Node.js inherently Single-Threaded hota hai (yani iske paas sirf ek hi main thread hoti hai jo code run karti hai). 
// Fir bhi ye hazaro requests ko asani se handle kar leta hai bina block hue, ye "Event Loop" ki wajah se hota hai.

// --------------------------------------------- Event Loop ka Kaam --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Ye kaam kaise karta hai?
// 1. Call Stack: Jo bhi synchronous (normal) code hota hai, wo yahan execute hota hai.
// 2. Node APIs / Thread Pool (libuv): Jab bhi koi heavy time-taking code (jaise file read karna ya DB query) aata hai, JS Engine usko Call Stack se nikal kar background thread (libuv) me bhej deta hai. Main thread aage ka kaam karti rehti hai.
// 3. Callback/Task Queue: Jab background wala kaam finish hota hai, toh uska function ek queue me aake lag jata hai.
// 4. Event Loop: Iska sirf ek hi kaam hai - ye Call Stack ko check karta hai. Agar Call Stack khali hai, toh ye Callback Queue se task uthata hai aur usko run karne ke liye Call Stack me bhej deta hai.

// Summary: Event Loop Node.js ka "dil (heart)" hai, jo ensure karta hai ki main thread kabhi freez ya block na ho.
