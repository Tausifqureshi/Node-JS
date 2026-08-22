// ========================================= Hello World Practical ======================================= //
// Node.js ka sabse basic practical. Ye sabse pehla code hota hai jo koi bhi developer likhta hai.

const runHelloWorldPractical = () => {
    console.log("=== Node.js Hello World ===\n");

    const userName = "Tausif Qureshi";
    const date = new Date().toLocaleDateString();

    console.log(`Hello World!`);
    console.log(`Welcome, ${userName}! Aaj ki date hai ${date}.`);

    console.log("\n✅ Success: Aapka Node.js environment successfully set up ho chuka hai aur kaam kar raha hai.");
};

runHelloWorldPractical();
