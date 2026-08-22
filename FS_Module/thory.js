// --------------------------------------------- fs (File System) Module --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> fs Module Kya Hai?
// fs (File System) Node.js ka ek built-in module hai jo hamari computer ki files ke sath interact karne (read, write, delete, update) me help karta hai.

// --------------------------------------------- Old Way vs New Way (Important for Interviews) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> fs module ke 3 tarike (Callbacks, Sync, aur Promises):

// 1. Synchronous (Blocking - Not Recommended): 
// Jaise fs.readFileSync(). Ye code agle line pe tab tak nahi jayega jab tak file read na ho jaye. Ye Node.js ke main thread ko block karta hai, isliye ise production me kabhi use nahi karna chahiye.
 
// 2. Callbacks (Asynchronous - Purana Tarika):
// Jaise fs.readFile(path, callback). Ye async hai aur main thread block nahi karta, par isme "Callback Hell" (functions ki gahri nesting) banne ka issue rehta hai. Ye legacy (old) tarika hai.

// 3. Promises & Async/Await (Modern aur New Way - Highly Recommended):
// Note: Aaj kal 'fs/promises' module ka use hota hai. Ye hamesha promise return karta hai jise hum 'async/await' ke sath cleanly likh sakte hain bina code block kiye. Interview me hamesha yahi modern approach batani chahiye!

// --------------------------------------------- Key Methods of fs/promises --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Kuch important functions (Modern approach me):
// 1. await fs.readFile() : Kisi file ka data padhne (read) ke liye.
// 2. await fs.writeFile() : Kisi nayi file me naya data likhne (write) ke liye.
// 3. await fs.appendFile() : Kisi existing file me naya data aur jodne (append) ke liye.
// 4. await fs.unlink() : Kisi file ko delete karne (remove) ke liye.
