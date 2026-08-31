// // console.log("Server start your please check this file run")
// const sum = require("./Modules_CommonJS_vs_ESM/calculator.js");

// const num1 = 50;
// const num2 = 10;

// // const total = sum.add(num1, num2);
// const total = sum.add(35,45);
// console.log("Total:", total); 



const https = require('http')

const createServer = https.createServer((res, req=>{
    res.writeHead(200, {
            "Content-Type": "text/plain"
        });
         res.end("Hello Bhai! Server chal raha hai.");

}))

const PORT = 3007;
    server.listen(PORT, () => {
        console.log(`🚀 Normal HTTP Server chal raha hai! 👉 http://localhost:${PORT}`);
    })
