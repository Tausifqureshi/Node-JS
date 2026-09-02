// ========================================= Application-Level Middleware Practical ======================================= //
// Application level middleware poori application par lagta hai.
// Ek bohot common real-world use case hai "Logger" banana (kaun sa user kab aaya).

// Pura code chalane ke liye pehle terminal me install karein: npm install express
const express = require('express');
const app = express();

const runAppLevelPractical = () => {
    console.log("=== Application Level Middleware (Logger) ===\n");

    // Ye hai hamara Middleware Function
    const timeLogger = (req, res, next) => {
        const time = new Date().toLocaleTimeString();
        // Real Case: Logging me humein janna hota hai ki kahan (path) request gayi, aur kis type ki (method). Ye req.path aur req.method se milta hai.
        console.log(`[LOGGER] Request Type: ${req.method} | Path: ${req.path} | Time: ${time}`);
        
        // Agar next() nahi bulayenge toh request yahin ruk jayegi!
        next(); 
    };

    // 'app.use' lagane se ab ye har route par chalega!
    app.use(timeLogger);

    app.get('/', (req, res) => {
        res.send("<h1>🏠 Home Page</h1><p>Check your terminal for logs!</p>");
    });

    app.get('/about', (req, res) => {
        res.send("<h1>ℹ️ About Page</h1><p>Check your terminal for logs!</p>");
    });

    const PORT = 4001;
    app.listen(PORT, () => {
        console.log(`🚀 Logger Server is running!`);
        console.log(`👉 Open: http://localhost:${PORT}`);
        console.log(`👉 Open: http://localhost:${PORT}/about`);
        console.log("(Har baar refresh karne par terminal me Time print hoga)");
    });
};

runAppLevelPractical();
