// ========================================= NPM Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// NPM (Node Package Manager) duniya ka sabse bada software registry hai. Isme hazaro pre-written codes (packages) available hain jo doosre developers ne banaye hain.
// Hum inhe freely apne project me download aur use kar sakte hain taaki hume sab kuch zero se na likhna pade.

const npmConceptExample = () => {
    console.log("=== NPM Concept Example ===\n");
    console.log("Q: Mujhe ek random ID generate karni hai apne naye user ke liye.");
    console.log("Option A (Without NPM): Mujhe 50 line ka math logic likhna padega aur check karna padega ki ID unique hai ya nahi.");
    console.log("Option B (With NPM): Terminal me jaunga aur likhunga 'npm install uuid'. Aur fir seedha 1 line me use kar lunga!");
    console.log("NPM humara time bachata hai!");
};
// npmConceptExample();


// ========================================= package.json kya hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Jab hum terminal me `npm init -y` likhte hain, toh ye file banti hai.
// Ye hamare project ki "Kundali" (ID Card) hoti hai. Isme likha hota hai ki:
// 1. Hamare project ka naam aur version kya hai.
// 2. Humne kaun-kaun se bahari (external) npm packages install kiye hain (jinhe dependencies kehte hain).
// 3. Project ko run karne ke liye kaunsi command chalani hai (Scripts section me).

const packageJsonExample = () => {
    console.log("\n=== package.json Explained ===");
    
    // Asli package.json ek JSON file hoti hai, par hum code se samajhte hain.
    const mockPackageJson = {
        "name": "my-cool-backend",
        "version": "1.0.0",
        "scripts": {
            "start": "node server.js",
            "dev": "nodemon server.js" 
        },
        "dependencies": {
            "express": "^4.18.2",
            "mongoose": "^7.0.0"
        }
    };
    
    console.log("Agar main terminal me 'npm run dev' likhunga, toh Node 'nodemon server.js' chala dega.");
    console.log("Dependencies dikhati hain ki maine Express aur Mongoose bahar se download kiye hue hain.");
};
// packageJsonExample();


// ========================================= package-lock.json aur node_modules ======================================= //
// Note:
// 1. node_modules: Jab hum koi package install karte hain, toh uska actual lamba chouda code is folder me aata hai. Ye folder bahut heavy hota hai isliye ise hum hamesha `.gitignore` me dalte hain.
// 2. package-lock.json: Ye file install kiye gaye packages ka "Exact Version" lock karti hai. Taaki agar kal ko us package ka naya update aaye, toh hamara purana project crash na ho jaye.
