// ========================================= Microtask vs Macrotask Practical ======================================= //
// Is practical me hum practically prove karenge ki Event Loop kaise queues ko priority deta hai.
// Rule: 
// 1. Sync code hamesha pehle chalta hai.
// 2. Microtask Queue (Promises, process.nextTick) hamesha pehle khali hoti hai.
// 3. Callback/Macrotask Queue (setTimeout, setImmediate, I/O) sabse aakhir me chalti hai.

const runMicrotaskMacrotaskPractical = () => {
    console.log("=== Event Loop Execution Order Prove Karna ===\n");

    console.log("1. Program Started (Sync - Call Stack)");

    // Ye Callback Queue me jayega
    setTimeout(() => {
        console.log("5. setTimeout executed (Macrotask Queue / Callback Queue)");
    }, 0);

    // Ye Microtask Queue me jayega (Lekin nextTick se thoda peeche)
    Promise.resolve().then(() => {
        console.log("4. Promise executed (Microtask Queue)");
    });

    // Ye Microtask Queue ki sabse VIP priority hai
    process.nextTick(() => {
        console.log("3. process.nextTick executed (Microtask VIP Priority)");
    });

    console.log("2. Program Ended (Sync - Call Stack)");

    // Output aayega: 1, 2, 3, 4, 5
    // Kyunki Event Loop pehle (1,2) Call Stack ko chalata hai, 
    // fir Microtask Queue (3,4) ko khali karta hai,
    // aur aakhir me Callback Queue (5) ko chalata hai.
};

runMicrotaskMacrotaskPractical();
