// ========================================= Async vs Sync Practical ============================================ //
const fs = require("fs");

console.log("1. Program Started (Synchronous)");

// ================== Synchronous (Blocking) ================== //
// fs.writeFileSync("test.txt", "Some data");
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log("2. Sync File Data read");

// ================== Asynchronous (Non-Blocking) ================== //
setTimeout(() => {
  console.log("2. Timer Finished (Asynchronous, 2 second baad aaya)");
}, 2000);

console.log("3. Doing some other work... (Ye timer ka wait nahi karega)");

// Result dekhenge toh output hoga:
// 1. Program Started
// 3. Doing some other work...
// 2. Timer Finished
// Yehi Asynchronous programming ki taqat hai!
