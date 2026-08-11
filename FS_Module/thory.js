// --------------------------------------------- fs (File System) Module --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> fs Module Kya Hai?
// fs (File System) Node.js ka ek built-in module hai jo hamari computer ki files ke sath interact karne (read, write, delete, update) me help karta hai.

// --------------------------------------------- Old Way vs New Way (Important for Interviews) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> fs module ke 3 tarike (Callbacks, Sync, aur Promises):

// 1. Synchronous (Blocking - Not Recommended): 
// Jaise fs.readFileSync(). Ye code agle line pe tab tak nahi jayega jab tak file read na ho jaye. Ise production server me avoid karna chahiye kyuki ye performance slow karta hai.

// 2. Callbacks (Asynchronous - Purana Tarika):
// Jaise fs.readFile(path, callback). Ye async hai par isme "Callback Hell" banne ka issue rehta hai. Ye pehle (old way me) bahut use hota tha.

// 3. Promises & Async/Await (Modern aur New Way - Highly Recommended):
// Aaj kal 'fs/promises' module ka use hota hai. Ye hamesha promise return karta hai jise hum 'async/await' ke sath cleanly likh sakte hain bina code block kiye. Interview me hamesha yahi modern approach batani chahiye!

// --------------------------------------------- Key Methods of fs module --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Kuch important functions (Modern approach me):
// 1. await fs.readFile() : Kisi file ka data read karne ke liye.
// 2. await fs.writeFile() : Kisi nayi file me data write karne ke liye.
// 3. await fs.appendFile() : Kisi existing file me aur data add (append) karne ke liye.
// 4. await fs.unlink() : Kisi file ko delete karne ke liye.
