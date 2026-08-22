// ========================================= Middleware Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Middleware ek function hota hai jo Request (req) aur Response (res) ke beech me khada hota hai.
// Real Life Example: Airport par Security Guard. 
// Jab aap airport (server) me enter karte ho (request), toh plane (response) tak pahunchne se pehle Security Guard (Middleware) aapka ticket aur bag check karta hai. Agar sab sahi hai toh wo aage jane deta hai `next()`, warna wahi se wapas bhej deta hai.

// ========================================= next() ka Use ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// Middleware me 3 parameters hote hain: (req, res, next).
// `next()` function call karna sabse zaruri hai. Agar aap `next()` nahi likhoge, toh request wahi atak jayegi aur client ko kabhi response nahi milega (Loading hoti rahegi).

// ========================================= Types of Middleware ======================================= //

const middlewareTypesExample = () => {
    const express = require('express');
    const app = express();

    console.log("=== Types of Middleware Example ===\n");

    // 1. Application-Level Middleware: Ye poore app par lagta hai. Har ek request isse hokar guzregi.
    app.use((req, res, next) => {
        console.log(`[APP LOG] Kisne request ki? URL: ${req.url}`);
        next(); // Aage jane do
    });

    // 2. Router-Level Middleware: Ye sirf specific route ya uske group par lagta hai.
    const checkAge = (req, res, next) => {
        // Dummy check
        if (req.query.age >= 18) {
            next(); // Bada hai, jane do
        } else {
            res.send("Aapki umar 18 se kam hai, aap yahan nahi aa sakte!");
        }
    };

    // Yahan humne route par 'checkAge' middleware laga diya
    app.get('/movies', checkAge, (req, res) => {
        res.send("Welcome to Adult Movies Section!");
    });

    // 3. Error-Handling Middleware: Ye sabse aakhir me lagta hai. Agar upar kahin error aaye, toh ye usko handle karta hai. Isme 4 parameters hote hain.
    app.use((err, req, res, next) => {
        console.error("[ERROR CAUGHT] ", err.message);
        res.status(500).send("Kuch toh gadbad hai daya!");
    });
};
// middlewareTypesExample();
