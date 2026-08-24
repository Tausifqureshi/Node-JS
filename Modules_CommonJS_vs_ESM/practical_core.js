// ========================================= Core Modules Practical ======================================= //
// Node.js me Core Modules (jaise 'fs', 'path', 'os', 'http') pehle se maujood hote hain.
// Hum yahan 'os', 'path', aur 'fs' module ka use karke apne computer ki jankari nikalenge aur usko ek file me save karenge.

const os = require('os');
const fs = require('fs');
const path = require('path');

const runCorePractical = () => {
    console.log("Core Module Practical Shuru Ho Raha Hai...\n");

    // 1. OS module se computer ki jankari lena
    const userInfo = os.userInfo();
    const systemMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2); // GB me convert kiya
    const systemPlatform = os.platform();

    const reportData = `
    ================ SYSTEM REPORT ================
    Computer User: ${userInfo.username}
    Operating System: ${systemPlatform}
    Total RAM: ${systemMemory} GB
    Report Generated At: ${new Date().toLocaleString()}
    ===============================================
    `;

    console.log("Ye data tayar hua hai:");
    console.log(reportData);

    // 2. 'path' module se hum sahi location banayenge, aur 'fs' module se data ko file me likhenge
    const reportFilePath = path.join(__dirname, 'system_report.txt');
    
    fs.writeFileSync(reportFilePath, reportData);
    console.log(`✅ Success: Report file yahan save ho gayi hai -> ${reportFilePath}`);
};

runCorePractical();
