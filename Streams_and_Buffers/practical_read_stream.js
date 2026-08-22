// ========================================= Readable Stream Practical ======================================= //
// Is practical me hum ek badi file ko chunks (tukdo) me read karke dikhayenge.
// Chunks (Buffers) ko dekhkar aapko samajh aayega ki Node.js RAM kaise bachata hai.

const fs = require('fs');
const path = require('path');

const runReadStreamPractical = () => {
    console.log("=== Readable Stream Ka Asli Use ===\n");

    const filePath = path.join(__dirname, 'large_file_demo.txt');
    
    // Testing ke liye ek thodi badi string generate karte hain
    const largeData = "Yeh data ka ek bohot bada chunk hai. ".repeat(1000);
    fs.writeFileSync(filePath, largeData);

    console.log("1. Stream banayi aur data read karna shuru kiya...\n");
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 1024 }); 
    // highWaterMark: 1024 (1KB) ka matlab hai ki ek baar me sirf 1KB data RAM me aayega

    let chunkCount = 0;

    // 'data' event tab trigger hota hai jab ek naya chunk (tukda) ready hota hai
    readStream.on('data', (chunk) => {
        chunkCount++;
        console.log(`[STREAMING] Chunk ${chunkCount} received! Size: ${chunk.length} characters.`);
    });

    // 'end' event tab trigger hota hai jab puri file read ho chuki ho
    readStream.on('end', () => {
        console.log(`\n✅ Success: File completely read in ${chunkCount} small chunks!`);
        console.log("Isse humari RAM completely bach gayi!");
        
        // Cleanup file
        fs.unlinkSync(filePath);
    });

    // Agar koi error aaye toh
    readStream.on('error', (err) => {
        console.log("Error aa gaya:", err);
    });
};

runReadStreamPractical();
