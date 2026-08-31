// ========================================= HTTP Module Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 'http' Node.js ka ek core (built-in) module hai. Iski madad se hum data ko internet (ya local network) par transfer kar sakte hain.
// Node.js ko originally isiliye banaya gaya tha taaki wo ek fast aur non-blocking web server ban sake. Ye HTTP module us web server ko banane ka sabse basic tarika (foundation) hai.

// ========================================= Basic Server Architecture ======================================= //
// 1. http.createServer() : Ye method ek naya server object banata hai.
// 2. Request (req) : Jo browser (Client) humse maangta hai (jaise URL, parameters).
// 3. Response (res) : Jo server (Node.js) wapas browser ko bhejta hai (jaise HTML, ya JSON data).
// 4. .listen(PORT) : Server ko kisi specific port (jaise 3000) par sunne (start) ke liye lagana padta hai.

const basicHttpExample = () => {
    const http = require('http');

    console.log("=== HTTP Server Example ===");

    // Server Banana
    const server = http.createServer((req, res) => {
        // Ye function har baar chalega jab koi browser is server ko hit karega
        console.log(`User ne is URL par request bheji: ${req.url}`);
        
        // Browser ko response dena
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello Tausif! Ye ek basic HTTP server ka response hai.");
    });

    // Server Start Karna (Testing ke liye uncomment karein)
    // const PORT = 5000;
    // server.listen(PORT, () => {
    //     console.log(`Server is running on http://localhost:${PORT}`);
    // });
};
// basicHttpExample();


// ========================================= Routing in Native HTTP ======================================= //
// Bina kisi third-party package (jaise Express.js) ke hum 'req.url' check karke alag-alag pages (routes) dikha sakte hain.

const routingExample = () => {
    const http = require('http');

    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.end("Welcome to the Home Page!");
        } 
        else if (req.url === "/about") {
            res.end("This is the About Page.");
        } 
        else {
            res.writeHead(404);
            res.end("404 Error: Page Not Found!");
        }
    });

    // server.listen(5001, () => console.log("Routing Server Running on Port 5001"));
};
// routingExample();
