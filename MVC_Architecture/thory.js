// ========================================= MVC Architecture Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// MVC (Model - View - Controller) ek design pattern hai (Code likhne ka tarika).
// Ek real-world project me hazaro lines ka code hota hai. Agar sab ek hi 'server.js' file me likh diya jaye, toh kal ko error dhundhna namumkin ho jayega.
// Isliye hum folders alag-alag banate hain:

// ========================================= M, V, C ka matlab ======================================= //
// 1. Model (M): Data se related sab kuch (Database connection, Schemas).
// 2. View (V): Frontend ka hissa (React, HTML). API development me hum ise ignore karte hain aur Frontend team ko de dete hain.
// 3. Controller (C): Asli dimaag (Logic). Jab request aaye toh kya calculation karni hai, kiska data lana hai, kya response dena hai.

// ========================================= Routes (Bonus) ======================================= //
// MVC ke sath 'Routes' folder bhi hamesha banta hai. Ye postman ki tarah batata hai ki kis URL pe jaane se kaunsa Controller chalega.

const mvcTheoryExample = () => {
    console.log("=== MVC Real Life Example ===\n");
    console.log("Aap Restaurant gaye...");
    console.log("1. Waiter (Router) ne aapka Order liya aur andar gaya.");
    console.log("2. Manager/Chef (Controller) ne dekha ki kya banana hai aur logic lagaya.");
    console.log("3. Fridge/Ration Room (Model) se saara kachcha samaan (Data) nikala gaya.");
    console.log("4. Khana bankar Table (View) par serve hua!");
    console.log("\nIsse sabka kaam alag rehta hai aur system organized rehta hai.");
};
// mvcTheoryExample();
