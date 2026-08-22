// ========================================= FS (File System) Module ======================================= //
// ChatGPT Se Liya Hua Syntex ---> fs module kya hai?
// Node.js browser ke bahar chalta hai, isliye iske paas computer ki Hard Disk ko access karne ki power hoti hai.
// 'fs' (File System) ek built-in core module hai jo files ko create, read, update, delete (CRUD) karne ke kaam aata hai.

// ========================================= fs module ke 2 tarike (Sync vs Async) ======================================= //
// Har fs method ke 2 version hote hain:
// 1. Sync Version (jaise readFileSync): Ye main thread ko block karta hai (Not recommended for big files).
// 2. Async Version (jaise readFile / fs.promises.readFile): Ye background me kaam karta hai (Recommended).

const fsSyncExample = () => {
    const fs = require('fs');
    console.log("=== FS Synchronous Example ===");
    
    // File Banana (Write)
    fs.writeFileSync('demo_sync.txt', 'Hello, ye sync tarike se likhi gayi file hai.');
    console.log("1. File Ban Gayi");

    // File Padhna (Read) - 'utf-8' lagana zaruri hai warna buffer (binary) data aayega
    const data = fs.readFileSync('demo_sync.txt', 'utf-8');
    console.log("2. Data Padha:", data);
};
// fsSyncExample();


// ========================================= fs.promises (Modern Approach) ======================================= //
// Aajkal callbacks ki jagah promises (async/await) ka use hota hai. 
// fs module me 'fs/promises' import karke hum direct async/await use kar sakte hain.

const fsAsyncPromiseExample = async () => {
    const fsPromises = require('fs').promises;
    console.log("\n=== FS Promises (Async/Await) Example ===");

    try {
        // File Update karna (Append)
        await fsPromises.appendFile('demo_async.txt', '\nNaya data async tarike se jod diya gaya!');
        console.log("1. Data Append Ho Gaya");

        // File Padhna
        const data = await fsPromises.readFile('demo_async.txt', 'utf-8');
        console.log("2. Data Padha:", data);

        // File Delete karna (Unlink)
        // await fsPromises.unlink('demo_async.txt'); 
        // console.log("3. File Delete Kar Di Gayi");

    } catch (error) {
        console.log("Oops Error aa gaya:", error.message);
    }
};
// fsAsyncPromiseExample();
