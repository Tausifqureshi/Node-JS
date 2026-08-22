// ========================================= Module kya hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Module ek simple JavaScript file hoti hai jisme humara code likha hota hai.
// Jaise hum apna saman alag-alag dabbon (boxes) me rakhte hain taki ghar bikhra hua na lage aur saman jaldi mil jaye, 
// waise hi hum apne bade project ke code ko chhote-chhote hisson (parts) me alag-alag files me tod dete hain. 
// 📌 Main Kaam: Module ka main kaam ek file ka code export karna aur doosri file mein import karke use karna hota hai.


// ========================================= 1. Core Modules (Built-in) ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Core Modules Node.js ke andar pehle se aate hain. Inhe alag se install karne ki zaroorat nahi padti.
// Niche ek proper example hai jisme hum 'fs' aur 'path' core module ka use karke ek file bana rahe hain aur usko padh rahe hain.

const coreModuleExample = () => {
    const fs = require("fs"); 
    const path = require("path");

    // File ka rasta (path) banana
    const folderPath = __dirname;
    const filePath = path.join(folderPath, 'demo_core.txt');

    // File banakar usme kuch likhna
    fs.writeFileSync(filePath, "Hello Tausif! Ye Core Module se likha gaya hai.");
    console.log("File successfully ban gayi:", filePath);

    // Wahi file wapas padhna
    const data = fs.readFileSync(filePath, "utf-8");
    console.log("File ke andar ka data:", data);
};

// coreModuleExample(); 


// ========================================= 2. Local Modules ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Ye wo files hain jo hum khud apne project me banate hain (jaise app.js, user.js, math.js).
// Inhe apne hi project ki doosri files me use karne ke liye export aur import karna padta hai.

const localModuleExample = () => {
    // Maan lijiye humne ek 'calculator.js' file banayi aur wahan se math logic export kiya:
    const mockCalculatorModule = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };

    // Ab hum usko yahan require kar rahe hain (Real file me require('./calculator.js') hoga)
    const calc = mockCalculatorModule;

    const total = calc.add(500, 200);
    const difference = calc.subtract(1000, 300);

    console.log(`Addition ka result: ${total}`);
    console.log(`Subtraction ka result: ${difference}`);
};

// localModuleExample();


// ========================================= 3. Third-Party Modules ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Ye wo modules hain jo dusre developers ne banaye hain aur hum NPM se download karte hain.
// Niche wale code ko chalane ke liye pehle terminal me 'npm install express' likhna zaroori hai.

const thirdPartyModuleExample = () => {
    // Express ek third party module hai jo server banane ke kaam aata hai
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello Tausif! Third Party Module (Express) perfectly kaam kar raha hai.");
    });

    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server chal gaya bhai port ${PORT} par!`);
    });
};

// thirdPartyModuleExample();
