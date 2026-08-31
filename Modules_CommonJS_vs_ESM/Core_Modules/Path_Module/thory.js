// ========================================= path Module Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// 'path' Node.js ka ek built-in core module hai jo files aur directory (folders) ke address (rasto) ke sath khelne ya unhe jodne me help karta hai.

// ========================================= Iski Zarurat Kyun Hai? (Cross-Platform Issue) ======================================= //
// Note:
// Har operating system me path likhne ka tarika alag hota hai.
// 1. Windows me backslash use hota hai: `C:\\Users\\Tausif\\folder\\file.html`
// 2. Mac aur Linux me forward slash use hota hai: `/Users/Tausif/folder/file.html`
// Agar hum apne code me manually string me slashes ('/') laga kar path banayenge, toh ho sakta hai Windows pe chalne wala code Mac par server crash kar de!
// 'path' module is OS wale difference ko samajhta hai aur khud-b-khud platform ke hisaab se sahi slash laga deta hai.

// ========================================= path.join() ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Ye alag-alag tukdo ko jod kar ek perfectly valid path bana deta hai.

const pathJoinExample = () => {
    const path = require('path');
    
    console.log("=== path.join() Example ===");
    const myFolder = "views";
    const myFile = "index.html";
    
    // OS (Windows/Mac) ke hisab se perfectly slash lagayega
    const fullPath = path.join(__dirname, myFolder, myFile); 
    
    console.log("Banaya gaya rasta:");
    console.log(fullPath);
};
// pathJoinExample();


// ========================================= path.basename() & path.extname() ======================================= //
// 1. path.basename() : Ye pure lamba path me se sirf aakhiri file ka naam nikal ke deta hai.
// 2. path.extname() : Ye batata hai ki file ka extension kya hai (jaise .html, .js).

const pathDetailsExample = () => {
    const path = require('path');
    
    console.log("\n=== path details Example ===");
    const dummyPath = 'C:/Users/Tausif/Documents/projects/website/style.css';

    const fileName = path.basename(dummyPath);
    const fileExtension = path.extname(dummyPath);

    console.log("Pure Raste me se File ka Naam nikala:", fileName);
    console.log("File kis type ki hai (Extension):", fileExtension);
};
// pathDetailsExample();
