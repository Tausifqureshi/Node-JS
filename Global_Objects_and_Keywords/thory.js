// ========================================= Global Objects ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Global Objects kya hote hain?
// Browser me hamare paas 'window' object hota hai global variables ke liye (jaise window.alert). Lekin Node.js browser ke bahar chalta hai, isliye isme 'window' nahi hota, isme 'global' object hota hai.
// Kuch cheezein bina require/import ke directly available hoti hain. Jaise: console, setTimeout, process, __dirname, __filename

const globalProcessExample = () => {
    // 'process' ek global object hai, jisme properties aur methods hote hain.
    const osPlatform = process.platform; 
    const nodeVersion = process.version;
    
    console.log("=== Process Info ===");
    console.log("Aapka Operating System hai:", osPlatform);
    console.log("Aapka Node.js Version hai:", nodeVersion);
};
// globalProcessExample();


// ========================================= Global Functions ======================================= //

const globalTimersExample = () => {
    // 'setTimeout' aur 'setInterval' global functions hain.
    const userName = "Tausif";

    console.log("Timer shuru ho raha hai...");
    
    const timerId = setTimeout(() => {
        console.log("Hello " + userName + ", 2 second ho gaye!");
    }, 2000);

    // Agar hum chahein toh timer cancel bhi kar sakte hain (Cleanup)
    // clearTimeout(timerId);
};
// globalTimersExample();


// ========================================= __dirname aur __filename ======================================= //
// Note: Sab cheezein actual 'global' object ka part nahi hoti, kuch (jaise __dirname, __filename) module-level variables hoti hain.
// ChatGPT Se Liya Hua Syntex ---> Directory aur File path nikalna.
// 1. __dirname: Ye us folder (directory) ka pura path deta hai jisme hamari file rakhi hui hai.
// 2. __filename: Ye us specific file ka pura path (naam ke sath) deta hai.

const directoryPathsExample = () => {
    const folderName = __dirname;
    const fileName = __filename;

    console.log("=== File & Folder Paths ===");
    console.log("Aapka Code Is Folder Me Hai:\n", folderName);
    console.log("Aapki File Ka Pura Naam Hai:\n", fileName);
};
// directoryPathsExample();
