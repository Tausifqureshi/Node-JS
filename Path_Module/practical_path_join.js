// ========================================= Path Join Practical ======================================= //
// Express.js ya kisi bhi backend framework me static files (HTML, CSS, Images) ko serve karne ke liye 'path.join' ka use bahut zyada hota hai.

const path = require('path');

const runPathJoinPractical = () => {
    console.log("=== Path Join Ka Asli Use ===\n");

    console.log("Scenario: Hame apne 'public' folder ke andar rakhi 'logo.png' ko access karna hai.\n");

    // Galat Tarika (Manual String Concat) - Isse Mac aur Windows par problem aati hai
    const wrongPath = __dirname + '/public/images/logo.png';
    console.log("❌ Galat Tarika (Manual):", wrongPath);

    // Sahi Tarika (path.join) - Ye OS ke hisab se slash khud lagata hai aur extra slashes hata deta hai
    const correctPath = path.join(__dirname, 'public', 'images', 'logo.png');
    console.log("✅ Sahi Tarika (path.join):", correctPath);

    console.log("\nNote: Express me hum aise likhte hain -> app.use(express.static(path.join(__dirname, 'public')))");
};

runPathJoinPractical();
