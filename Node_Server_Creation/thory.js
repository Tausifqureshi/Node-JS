// --------------------------------------------- Node.js Server Kya Hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Server Kya Hota Hai?
// Server ek program ya computer hota hai jo internet par dusre computers (clients/browsers) ki requests ko sunta hai aur unko data (response) wapas bhejta hai. 
// Jaise jab hum google.com likhte hain, toh Google ka server hamari request sunta hai aur hume Google ka page bhej deta hai.

// --------------------------------------------- Node.js me Server Kaise Banta Hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Server banne ka process.
// Node.js me ek built-in module hota hai jiska naam 'http' hai. Isi ka use karke hum apna khud ka web server bana sakte hain.
// Node.js backend me bohot famous isliye hai kyuki isme server banana bohot asaan aur fast hota hai.

// --------------------------------------------- Server Banane Ke Main Steps --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> 3 Basic Steps:
// 1. http module ko import karna: require('http') ka use karke.
// 2. Server Create karna: http.createServer() method ka use karke. Iske andar ek function hota hai jisme 'request' (req) aur 'response' (res) aate hain.
// 3. Server ko kisi Port par chalana: server.listen(port_number) ka use karke. (Jaise port 3000, 8080 wagaira).

// --------------------------------------------- Request (req) aur Response (res) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> req aur res me kya hota hai?
// - req (Request): Client ne server se kya manga hai? Uska kaunsa page (URL) manga hai? Ye sab req me hota hai.
// - res (Response): Hum client ko wapas kya bhej rahe hain? HTML page, JSON data ya error message? Ye hum res ke zariye bhejte hain (jaise res.end("Hello")).
