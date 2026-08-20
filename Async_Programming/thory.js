// --------------------------------------------- Synchronous vs Asynchronous Programming --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Dono me technically kya farq hai?

// --------------------------------------------- 1. Synchronous (Blocking) --------------------------------------------- //
// - Isme code line-by-line chalta hai. Ek line ka kaam jab tak pura nahi hota, agli line execute nahi hogi.
// - Is process ko hum technically "Blocking the Main Thread" kehte hain.
// - Real-life Example: Aap ATM ki line me khade ho, jab tak aapse aage wale ka transaction pura nahi hoga, aap apna ATM card use nahi kar sakte.
// - Example in Code: fs.readFileSync()

// --------------------------------------------- 2. Asynchronous (Non-Blocking) --------------------------------------------- //
// - Isme agar koi line zyada time le rahi hai (jaise database se data lana), toh Node.js wahan rukta nahi hai, balki us kaam ko background me bhej deta hai aur aage ka code chala deta hai.
// - Isko "Non-Blocking Architecture" kehte hain.
// - Real-life Example: Restaurant ka Waiter. Wo ek table se order leta hai (time-taking), phir kitchen me dekar turant dusri table ka order lene chala jata hai. Wo kitchen ke bahar khade hokar wait nahi karta!
// - Example in Code: fs.readFile(), setTimeout(), API calls.

// --------------------------------------------- Interview Tip --------------------------------------------- //
// Note: Node.js Asynchronous programming aur Non-Blocking I/O ki wajah se hi itna fast aur popular hai! Hamesha naye projects me asynchronous methods hi use karne chahiye taaki server heavily scale kar sake aur users ko block na kare.
