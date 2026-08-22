// ========================================= Error Handling Kyun Zaruri Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Node.js "Single-Threaded" hai. Iska matlab agar kisi ek user ki request par server me error (bug) aa gaya aur wo handle nahi hua, toh poora Node.js server crash ho jayega aur baaki sabhi users ke liye application band ho jayegi!
// Isliye errors ko "catch" karna (pakadna) aur gracefully handle karna backend me sabse zaruri chiz hai.

// ========================================= 1. Synchronous Code Me (try...catch) ======================================= //
// Agar normal synchronous code hai, toh hum `try { ... } catch(err) { ... }` block ka use karte hain. 
// Agar `try` wale hisse me error aata hai, toh server crash hone ki bajaye `catch` block me chala jata hai.

const syncErrorExample = () => {
    console.log("=== Synchronous Error Handling ===");
    const userData = '{"name": "Tausif"'; // Galti se bracket band nahi kiya

    try {
        console.log("JSON Parse karne ki koshish kar rahe hain...");
        const parsedData = JSON.parse(userData); // Yahan error aayega
        console.log("User ka naam:", parsedData.name);
    } catch (err) {
        console.log("❌ Bhai JSON format galat hai! Server crash hone se bacha liya.");
        console.log("Error details:", err.message);
    }
};
// syncErrorExample();


// ========================================= 2. Asynchronous Promises Me (.catch) ======================================= //
// Jab hum Promises ka use karte hain, toh error pakadne ke liye chain ke end me `.catch(err => ...)` lagaya jata hai.

const asyncPromiseErrorExample = () => {
    console.log("\n=== Promises Error Handling ===");
    
    // Fake promise jo hamesha reject hogi
    const fakeFetch = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Network connection fail ho gaya!")), 1000);
    });

    fakeFetch()
        .then(data => console.log("Data mila:", data))
        .catch(err => {
            console.log("❌ Promise Error pakda gaya:");
            console.log("Error details:", err.message);
        });
};
// asyncPromiseErrorExample();


// ========================================= 3. Modern Async/Await Me (try...catch) ======================================= //
// Async/Await sabse best hai kyunki isme hum asynchronous code ko bhi normal Synchronous code ki tarah `try...catch` block me likh sakte hain. 
// Ye interview me sabse zyada practically poocha aur expect kiya jata hai.

const asyncAwaitErrorExample = async () => {
    console.log("\n=== Async/Await Error Handling ===");
    
    const fakeFetch = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Database down hai!")), 1000);
    });

    try {
        console.log("Data laane ka wait kar rahe hain...");
        let data = await fakeFetch(); // Yahan error fhekega
        console.log("Data:", data);
    } catch (err) {
        console.log("❌ Try-Catch ne Async Error aaram se pakad liya:");
        console.log("Error details:", err.message);
    }
};
// asyncAwaitErrorExample();


// ========================================= Uncaught Exceptions (Global Catch) ======================================= //
// Note: Agar galti se koi error handle hone se chhoot jaye, toh Node.js ke 'process' object par global event listeners lagakar hum us crash ko record kar sakte hain aur server ko gracefully band ya restart kar sakte hain.

const globalErrorExample = () => {
    process.on('uncaughtException', (err) => {
        console.log("\n🚨 Achanak se Unhandled Error aa gaya!");
        console.log("Error:", err.message);
        console.log("Ab server safely log create karega aur crash hone se pehle gracefully band hoga.");
        process.exit(1); 
    });

    // Ye ek unhandled error generate karega jo sidha upar wale listener me catch hoga
    // throw new Error("Ye error maine jaan bujh kar choda hai!"); 
};
// globalErrorExample();
