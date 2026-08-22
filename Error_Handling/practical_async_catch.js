// ========================================= Async Error Handling Practical ======================================= //
// Asynchronous code (API calls, Database queries) me error aane ke chances sabse zyada hote hain.
// Yahan hum try-catch ka use Async/Await ke sath karenge (Jo ki Modern Standard hai).

const runAsyncErrorPractical = async () => {
    console.log("=== Async/Await Error Handling Ka Asli Use ===\n");

    // Dummy API call function (jo 1.5s baad fail ho jayegi)
    const fetchUserData = async (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === 1) {
                    resolve({ id: 1, name: "Tausif Qureshi" });
                } else {
                    reject(new Error("User not found in database!"));
                }
            }, 1500);
        });
    };

    console.log("1. User 2 ka data laane ki koshish...");

    try {
        // Hum user 2 mang rahe hain, par hume pata hai wo fail hoga
        const user = await fetchUserData(2); 
        console.log("User data:", user);
    } catch (error) {
        console.log("❌ Catch Block chala! Error aaya tha: ", error.message);
        
        // Asli project me yahan hum user ko res.send({error: "User not found"}) bhejte hain
        console.log("Frontend ko response gaya: { status: 404, message: 'User not found' }");
    }

    console.log("\n✅ Success: Asynchronous error bhi cleanly handle ho gaya.");
};

runAsyncErrorPractical();
