// --------------------------------------------- path Module --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> path Module Kya Hai?
// 'path' Node.js ka ek built-in core module hai jo files aur directory (folders) ke address (rasto) ke sath khelne ya unhe jodne me help karta hai.

// --------------------------------------------- Iski Zarurat Kyun Hai? (Cross-Platform Issue) --------------------------------------------- //
// Note:
// Har operating system me path likhne ka tarika alag hota hai.
// - Windows me backslash use hota hai: `C:\Users\Tausif\folder\file.html`
// - Mac aur Linux me forward slash use hota hai: `/Users/Tausif/folder/file.html`
// Agar hum apne code me manually string me slashes ('/') laga kar path banayenge, toh ho sakta hai Windows pe chalne wala code Mac par server crash kar de!
// 'path' module is OS wale difference ko samajhta hai aur khud-b-khud platform ke hisaab se sahi slash laga deta hai. Isliye path banane ke liye hamesha 'path.join()' ka use karna best practice hai.

// --------------------------------------------- Core Functions --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->
// 1. path.join(__dirname, 'folder', 'file.txt') : Ye alag-alag tukdo ko jod kar ek perfectly valid path bana deta hai (bina extra slashes ki fikar kiye).
// 2. path.basename(filePath) : Ye pure lamba path me se sirf aakhiri file ka naam (jaise file.txt) nikal ke deta hai.
// 3. path.extname(filePath) : Ye batata hai ki file ka extension kya hai (jaise .html, .js, .txt).
