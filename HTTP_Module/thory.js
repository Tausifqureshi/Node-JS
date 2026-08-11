// --------------------------------------------- http Module --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> http Module Kya Hai?
// http Node.js ka ek built-in core module hai jo HTTP server aur client banane me help karta hai. Iski wajah se hum Node.js ke through web server create kar sakte hain aur internet pe data (requests aur responses) send aur receive kar sakte hain.

// --------------------------------------------- Web Server Basics --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Client aur Server kya hain?
// 1. Client (Browser): Jo request karta hai (jaise hum google.com open karte hain).
// 2. Server (Node.js): Jo request sunta hai, usko process karta hai, aur client ko response (jaise HTML ya JSON data) bhejta hai.

// --------------------------------------------- Important Methods --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Basic Implementation ka idea.
// 1. http.createServer(callback): Ye ek naya web server banata hai. Callback function me do cheezein hoti hain: 'req' (Request - client se aane wala data) aur 'res' (Response - server jo wapas bhejega).
// 2. server.listen(port): Ye server ko ek specific port (jaise 3000, 8080) par chala deta hai taaki wo browser se request sun sake.
// 3. res.writeHead(): Client ko batane ke liye ki jo data hum bhej rahe hain wo HTML hai, text hai, ya JSON, aur HTTP status code (jaise 200, 404).
// 4. res.end(): Response ko close karke client tak bhej dena.
