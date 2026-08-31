// ========================================= Error-Handling Middleware Practical ======================================= //
// Ye sabse important middleware hota hai jo poori application ke errors ko ek jagah catch karta hai.
// Isme hamesha 4 arguments hote hain (err, req, res, next).

const express = require('express');
const app = express();

const runErrorHandlingPractical = () => {
    console.log("=== Error Handling Middleware ===\n");

    app.get('/', (req, res) => {
        res.send("<h1>Home Page</h1><a href='/crash'>Go to Crash Route</a>");
    });

    // Ek route banate hain jo jaan-boojh kar error dega
    app.get('/crash', (req, res, next) => {
        console.log("Crash route hit hua...");
        const myError = new Error("Database achanak se down ho gaya!");
        
        // Error ko pakad kar hum next() ke andar daal kar aage bhej dete hain
        next(myError);
    });

    // 🚨 Ye hai hamara Global Error Handling Middleware (Ye hamesha aakhir me lagta hai)
    // Jab bhi kisi function se `next(error)` call hoga, control direct yahan aa jayega
    app.use((err, req, res, next) => {
        console.log("🚨 [GLOBAL ERROR CATCHER] Error Pakda Gaya!");
        console.log("Error details:", err.message);

        // User ko HTML page dikhana (Server crash nahi hoga!)
        res.status(500).send(`
            <h1 style="color:red;">Oops! Something went wrong.</h1>
            <p><strong>Developer Note:</strong> ${err.message}</p>
            <p>Our team has been notified. Try again later.</p>
        `);
    });

    const PORT = 4003;
    app.listen(PORT, () => {
        console.log(`🚀 Error Handler Server is running!`);
        console.log(`👉 Open: http://localhost:${PORT}`);
    });
};

runErrorHandlingPractical();
