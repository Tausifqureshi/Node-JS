// ========================================= Append & Delete Practical ======================================= //
// Append ka matlab hai purane data ko delete kiye bina, uske aage naya data jodna.
// Ye Logs banane (kya-kya events hue) me bahut use hota hai.

const fs = require('fs');
const path = require('path');

const runAppendDeletePractical = () => {
    console.log("=== FS Append & Delete Ka Asli Use ===\n");

    const logFile = path.join(__dirname, 'activity_logs.txt');
    const timeNow = new Date().toLocaleString();

    // 1. Data Jodna (Append)
    const logMessage = `\n[${timeNow}] User logged in to the system.`;
    
    fs.appendFileSync(logFile, logMessage);
    console.log("1. Naya Log add ho gaya hai activity_logs.txt me.");

    // Yahan hum timeout laga kar dikhayenge ki file delete bhi ho sakti hai
    console.log("\n2. Wait karo... 3 second baad ye file permanently delete (unlink) ho jayegi.");

    setTimeout(() => {
        // 2. File Delete karna (Unlink)
        if(fs.existsSync(logFile)) {
            fs.unlinkSync(logFile);
            console.log("✅ Success: activity_logs.txt file safely delete kar di gayi hai!");
        } else {
            console.log("File mili hi nahi delete karne ke liye.");
        }
    }, 3000);
};

runAppendDeletePractical();
