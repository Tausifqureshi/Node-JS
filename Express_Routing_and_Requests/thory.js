// ========================================= Request Object (req) Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Jab frontend (React/Browser) backend (Node.js) ko data bhejta hai, toh wo data 'req' object me aata hai.
// Data nikalne ke 3 sabse main tarike hote hain jo har API me use hote hain:
// 1. req.params  (Dynamic URL)
// 2. req.query   (Search Filters)
// 3. req.body    (Forms / Secret Data)

// ========================================= 1. req.params (Path Variables) ======================================= //
// Iska use specific cheez dhoondne ke liye hota hai. 
// Jaise Facebook profile: facebook.com/tausif (Yahan 'tausif' ek parameter hai).
// Route me isko colon ':' laga kar define karte hain -> '/users/:username'

const reqParamsExample = () => {
    console.log("=== req.params Example ===\n");
    console.log("Agar Route hai: /users/:id");
    console.log("Aur User hit kare: /users/101");
    console.log("Toh req.params hoga: { id: '101' }");
};
// reqParamsExample();


// ========================================= 2. req.query (Query Strings) ======================================= //
// Iska use Data ko Filter ya Sort karne ke liye hota hai (Amazon me filters lagana).
// URL me Question Mark '?' ke baad jo bhi hota hai wo query hoti hai.

const reqQueryExample = () => {
    console.log("\n=== req.query Example ===\n");
    console.log("Agar User hit kare: /search?category=shoes&color=black");
    console.log("Toh req.query hoga: { category: 'shoes', color: 'black' }");
};
// reqQueryExample();


// ========================================= 3. req.body (Body Payload) ======================================= //
// Jab hum POST request karte hain (jaise Login form submit karna), toh hum URL me password nahi bhej sakte (wo secure nahi hai).
// Us data ko chhupa kar bheja jata hai, jise hum 'req.body' me nikalte hain.
// Note: Isko read karne ke liye Express me 'app.use(express.json())' lagana zaroori hai!

const reqBodyExample = () => {
    console.log("\n=== req.body Example ===\n");
    console.log("User Login Form Submit kar raha hai...");
    console.log("Frontend (React) ne Data bheja chhupa kar.");
    console.log("Backend me req.body me Data milega: { email: 'abc@gmail', password: '123' }");
};
// reqBodyExample();
