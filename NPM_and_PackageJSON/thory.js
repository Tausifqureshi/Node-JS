// --------------------------------------------- NPM & package.json --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> NPM Kya Hai?
// NPM (Node Package Manager) duniya ka sabse bada software registry hai. Isme hazaro pre-written codes (packages/libraries) available hain jo doosre developers ne banaye hain (jaise Express, Dotenv, Mongoose). Hum inhe freely apne project me download aur use kar sakte hain taaki hume sab kuch zero se na likhna pade.

// --------------------------------------------- package.json kya hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> 
// Jab hum terminal me `npm init -y` likhte hain, toh ye file banti hai.
// Ye hamare project ki "Kundali" (ID Card) hoti hai. Isme likha hota hai ki:
// 1. Hamare project ka naam aur version kya hai.
// 2. Humne kaun-kaun se bahari (external) npm packages install kiye hain (jinhe dependencies kehte hain).
// 3. Project ko run karne ke liye kaunsi command chalani hai (Scripts section me).

// --------------------------------------------- package-lock.json aur node_modules --------------------------------------------- //
// Note:
// - node_modules: Jab hum koi package install karte hain, toh uska actual lamba chouda code is folder me aata hai. Ye folder bahut heavy hota hai isliye ise hum hamesha `.gitignore` me dalte hain aur GitHub par kabhi upload nahi karte.
// - package-lock.json: Ye file install kiye gaye packages ka "Exact Version" lock karti hai. Taaki agar kal ko us package ka naya update aaye, toh hamara purana project crash na ho jaye (version mismatch ki wajah se).
