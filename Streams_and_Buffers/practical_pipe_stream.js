// ========================================= Pipe Stream Practical ======================================= //
// Pipe ka matlab hai ek jagah se data padhna (Readable Stream) aur seedha dusri jagah likh dena (Writable Stream).
// Ye bilkul ek paani ke pipe jaisa kaam karta hai jahan bich me paani (data) store (RAM) nahi hota.

const fs = require('fs');
const path = require('path');

const runPipePractical = () => {
    console.log("=== Pipe (Stream) Ka Asli Use ===\n");

    const sourceFile = path.join(__dirname, 'source.txt');
    const destinationFile = path.join(__dirname, 'destination.txt');

    // Source me data dalna
    fs.writeFileSync(sourceFile, "Ye data Stream.pipe() ke zariye copy kiya jayega.");

    console.log("1. Source file ready hai.");

    const readStream = fs.createReadStream(sourceFile);
    const writeStream = fs.createWriteStream(destinationFile);

    console.log("2. Pipe joda jaa raha hai (Read --> Write)...");

    // ✨ The Magic Line
    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log("3. Data successfully copy ho gaya!");
        console.log("✅ Success: .pipe() se file copy karna sabse memory-efficient tarika hai!");
        
        // Cleanup
        fs.unlinkSync(sourceFile);
        
        const copiedData = fs.readFileSync(destinationFile, 'utf8');
        console.log(`\nDestination file data: "${copiedData}"`);
    });
};

runPipePractical();
