// ========================================= Node.js Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Javascript originally sirf browsers me chalti thi (Chrome, Firefox). 
// Ryan Dahl (Node.js ke creator) ne Chrome ke V8 engine (jo JS ko computer ki language me convert karta hai) ko browser ke bahar nikal kar C++ ke sath jod diya. 
// Isi naye environment ka naam "Node.js" hai. Ab JavaScript server (backend) par bhi chal sakti hai!

// ========================================= Node.js Kyu Famous Hai? ======================================= //
// 1. Single Language (JavaScript everywhere): Ab frontend (React) aur backend (Node.js) dono ek hi language me likhe ja sakte hain. MERN stack (MongoDB, Express, React, Node) isiliye itna popular hai.
// 2. Non-blocking (Asynchronous): Ye ek hi time par bohot saari requests handle kar sakta hai bina hang hue.
// 3. Fast Execution: Chrome ke V8 engine ki wajah se code execution bahut fast hoti hai.

const introductionExample = () => {
    console.log("=== Node.js Introduction Example ===");
    console.log("Welcome to Node.js!");
    
    // JS ka array aur map function easily server pe chala sakte hain
    const skills = ["React", "Node.js", "MongoDB", "Express"];
    
    console.log("My Backend Skills:");
    skills.forEach((skill, index) => {
        console.log(`${index + 1}. ${skill}`);
    });
};
// introductionExample();


// ========================================= Node.js Kahan Use Hota Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// ✅ Use cases (Kahan best hai): Real-time apps (Chat applications, Live streaming, Netflix), REST APIs, Single Page Applications (SPA).
// ❌ Not recommended (Kahan nahi use karna chahiye): Heavy CPU intensive tasks (jaise Video editing/rendering backend par karna ya complex Machine Learning). Yahan Python ya C++ better hai.

const usageExample = () => {
    console.log("\n=== Use Cases Example ===");
    const canUseNode = (taskType) => {
        if (taskType === "RealTimeChat") return "Yes, Node.js is perfect for Chat Apps!";
        if (taskType === "VideoEncoding") return "No, use Python or C++ instead.";
        return "Depends on the requirement.";
    };

    console.log("Can I build Whatsapp backend with Node.js? ->", canUseNode("RealTimeChat"));
    console.log("Can I build a heavy Video Editor backend? ->", canUseNode("VideoEncoding"));
};
// usageExample();
