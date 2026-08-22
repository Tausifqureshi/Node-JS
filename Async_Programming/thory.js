// ========================================= Synchronous (Blocking) ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Dono me technically kya farq hai?
// 1. Isme code line-by-line chalta hai. Ek line ka kaam jab tak pura nahi hota, agli line execute nahi hogi.
// 2. Is process ko hum technically "Blocking the Main Thread" kehte hain.
// 3. Real-life Example: Aap ATM ki line me khade ho, jab tak aapse aage wale ka transaction pura nahi hoga, aap apna ATM card use nahi kar sakte.

const syncProgrammingExample = () => {
    const fs = require('fs');

    console.log("=== Synchronous Code ===");
    console.log("1. Program Start hua");

    try {
        // dummy file read karne ka try karega jo exist nahi karti
        // const data = fs.readFileSync('demo.txt', 'utf8'); 
        
        // hum ek dummy block delay lagate hain loop chala ke
        const start = Date.now();
        console.log("2. Sync kaam chal raha hai (Wait 2 sec)...");
        while(Date.now() - start < 2000) {
            // Main thread completely block ho gaya 2 second ke liye!
        }
        
        console.log("3. Sync kaam khatam hua");
    } catch (error) {
        console.log("Error:", error.message);
    }

    console.log("4. Program End hua (Jab tak 3 nahi chalega, ye nahi chalega)");
};
// syncProgrammingExample();


// ========================================= Asynchronous (Non-Blocking) ======================================= //
// 1. Isme agar koi line zyada time le rahi hai (jaise database se data lana), toh Node.js wahan rukta nahi hai, balki us kaam ko background me bhej deta hai aur aage ka code chala deta hai.
// 2. Isko "Non-Blocking Architecture" kehte hain.
// 3. Real-life Example: Restaurant ka Waiter. Wo ek table se order leta hai (time-taking), phir kitchen me dekar turant dusri table ka order lene chala jata hai. Wo kitchen ke bahar khade hokar wait nahi karta!

const asyncProgrammingExample = () => {
    console.log("\n=== Asynchronous Code ===");
    console.log("1. Async Program Start hua");

    // Ye kaam background me jayega (Non-Blocking)
    setTimeout(() => {
        console.log("3. Background se data aa gaya (2 second baad)!");
    }, 2000);

    // Ye wait nahi karega
    console.log("2. Async Program End hua (Turant chal gaya bina ruke!)");
};
// asyncProgrammingExample();


// ========================================= Interview Tip ======================================= //
// Note: Node.js Asynchronous programming aur Non-Blocking I/O ki wajah se hi itna fast aur popular hai! 
// Hamesha naye projects me asynchronous methods hi use karne chahiye taaki server heavily scale kar sake aur users ko block na kare.
