// --------------------------------------------- Streams and Buffers --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Streams aur Buffers ki zarurat kyu padi?
// Jab hamare paas koi bahut badi file hoti hai (jaise 2GB ki video), toh 'fs.readFile' use karna bekar hai kyuki wo puri 2GB file ko pehle memory (RAM) me load karega jisse aapka Node.js server crash ho sakta hai. 
// Is problem ko solve karne ke liye Streams aur Buffers use hote hain.

// --------------------------------------------- Buffer Kya Hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Buffer ek temporary storage (memory) hai jahan data chote-chote tukdo (chunks) me jama hota hai process hone se pehle. 
// Note: Streams memory (RAM) bachane ke liye bari files ko ek sath load nahi karte, balki usko chhote-chhote chunks (buffers) me tod kar bhejte hain. Isse server kabhi crash nahi hota.

// --------------------------------------------- Stream Kya Hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Stream wo pipeline (rasta) hai jiske zariye data continuously flow karta hai. Data ko ek sath nahi balki chote-chote chunks me bheja jata hai taaki RAM memory bachi rahe aur server fast kaam kare.

// --------------------------------------------- Types of Streams --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Streams 4 tarah ki hoti hain:
// 1. Readable Stream: Data ko padhne (read) ke liye (jaise fs.createReadStream).
// 2. Writable Stream: Data ko likhne (write) ke liye (jaise fs.createWriteStream).
// 3. Duplex Stream: Jo read aur write dono ek sath kar sake (jaise Network Sockets).
// 4. Transform Stream: Jo data flow hote waqt usko bich raste modify ya compress kar sake (jaise data ko ZIP file me badalna).
