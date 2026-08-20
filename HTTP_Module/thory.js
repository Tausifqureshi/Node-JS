// --------------------------------------------- http Module --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> http Module Kya Hai?
// http Node.js ka ek built-in core module hai jo network par data transfer karne aur HTTP server/client banane me help karta hai. 
// Bina kisi bahari library (jaise Express.js) ke, hum sirf 'http' module se apna khud ka ek basic backend web server bana sakte hain.

// --------------------------------------------- Core Functions --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> 
// 1. http.createServer(): Ye ek naya web server banata hai jo aane wali requests (jaise koi URL hit karna) ko sunta hai (listen) aur uska response deta hai.
// 2. req (Request): Is object me client (browser) ki taraf se aane wala data hota hai (jaise URL, Method: GET/POST, headers).
// 3. res (Response): Is object ka use hum client ko wapas data (HTML, JSON, ya Error message) bhejne ke liye karte hain.

// --------------------------------------------- Technical Note (Interview Tip) --------------------------------------------- //
// Note: Asli duniya ke (Production) applications me hum sirf 'http' module ka use directly nahi karte kyunki isme routing (alag-alag URLs sambhalna) aur security manage karna bahut complex ho jata hai.
// Isliye hum Express.js jaisa web framework use karte hain jo backend me isi 'http' module ka hi use karke hamara kaam bahut asaan kar deta hai.
