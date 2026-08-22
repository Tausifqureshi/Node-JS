// ========================================= Non-Blocking Demo Practical ======================================= //
// Node.js apne non-blocking (asynchronous) nature ki wajah se jaana jata hai.
// Is practical me hum dekhenge ki wo ek heavy kaam ke chalte hue bhi dusre kaam ko kaise continue rakhta hai.

const runNonBlockingPractical = () => {
    console.log("=== Node.js Non-Blocking Power ===\n");

    console.log("1. Restaurant khula aur order lena shuru kiya.");

    // Ek lamba task (Maan lijiye ye ek bada data load kar raha hai ya API call kar raha hai)
    setTimeout(() => {
        console.log("3. (2 Second baad) Table 1 ka lamba order ban kar aa gaya!");
    }, 2000);

    // Node.js upar wale task ka wait nahi karega, wo seedha aage badh jayega
    console.log("2. Waiter ne turant Table 2 aur Table 3 se bhi order le liye! (Wo block nahi hua)");

    console.log("\n✅ Success: Yahi reason hai ki Node.js chat applications aur live streams ke liye sabse best hai.");
};

runNonBlockingPractical();
