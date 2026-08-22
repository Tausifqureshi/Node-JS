// ========================================= Backend server banana kyu zaruri hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Frontend (jaise React ya HTML) user ko UI dikhata hai. Lekin user jab login karta hai ya data mangta hai, toh wo ek request bhejta hai.
// Us request ko sunne (listen) aur uska sahi data (response) wapas dene ke liye hume 24/7 chalne wala ek program chahiye, jise hum Server kehte hain.

// ========================================= Basic Server Architecture ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Request (req): Ye browser (client) ki taraf se aati hai. Isme URL, HTTP Method (GET, POST), aur data hota hai.
// 2. Response (res): Ye Node.js server browser ko wapas bhejta hai (HTML file, JSON data, ya Error page).
// 3. Port: Server computer ke kis "darwaze" par khada hokar sunega (listen karega). Jaise localhost:8000 me 8000 ek Port hai.

const nodeServerExample = () => {
    const http = require("http"); 

    console.log("=== Node Server Creation Example ===");

    const server = http.createServer((req, res) => { 
        const userName = "Tausif";
        
        console.log(`\nNew Request Aayi! -> URL: ${req.url} | Method: ${req.method}`);
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello ${userName}, Welcome to your Server!`); 
    });

    const PORT = 8002;
    // server.listen(PORT, () => {
    //     console.log(`Server is running beautifully on port ${PORT}...`);
    // });
};
// nodeServerExample();


// ========================================= Node.js hi kyu? ======================================= //
// Note: Node.js Event-Driven aur Non-blocking architecture pe bana hai. 
// Iska faida ye hai ki ek basic Node.js server hazaaro requests ek sath handle kar sakta hai bina hang hue. 
// Traditional servers (jaise purana PHP/Apache) har nayi request ke liye ek naya thread banate the jo bahut zyada RAM consume karta tha.

const comparisonExample = () => {
    console.log("\n=== Why Node.js? ===");
    console.log("Traditional Server (PHP/Java): 10,000 requests aayi -> 10,000 threads bane -> RAM full -> Server Crash!");
    console.log("Node.js Server: 10,000 requests aayi -> Sirf 1 thread ne sabki requests li (Event Loop) aur background APIs ko de di -> Server perfectly smooth chal raha hai!");
};
// comparisonExample();
