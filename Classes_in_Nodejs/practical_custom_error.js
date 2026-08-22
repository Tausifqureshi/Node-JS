// ========================================= Custom Error Class Practical ======================================= //
// Express.js aur Node.js me errors ko easily identify karne ke liye hum built-in 'Error' class ko extend karke apni custom errors banate hain.
// Jaise API me 'NotFoundError' ya 'ValidationError'.

class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // Asli Error class ko message dena zaruri hai
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Ye mark karta hai ki ye humara jaana-pehchana error hai

        Error.captureStackTrace(this, this.constructor); // Isse error kahan se aaya (Line number) wo track hota hai
    }
}

const runCustomErrorPractical = () => {
    console.log("=== Custom Error Class Ka Asli Use ===\n");

    const validateUser = (user) => {
        if (!user.email) {
            // Yahan hum normal 'new Error()' ki jagah apna 'AppError' throw kar rahe hain!
            throw new AppError("Bhai Email id toh de do!", 400); 
        }
        
        if (!user.isAdmin) {
            throw new AppError("Access Denied! Tum Admin nahi ho.", 403);
        }

        console.log("✅ User is valid:", user.name);
    };

    try {
        console.log("Testing without email...");
        validateUser({ name: "Tausif" });
    } catch (err) {
        console.log("\n❌ [ERROR CAUGHT]");
        console.log(`Status Code: ${err.statusCode}`);
        console.log(`Message: ${err.message}`);
        console.log(`Status Type: ${err.status}`);
    }

    try {
        console.log("\nTesting without Admin rights...");
        validateUser({ name: "Aman", email: "aman@example.com", isAdmin: false });
    } catch (err) {
        console.log("\n❌ [ERROR CAUGHT]");
        console.log(`Status Code: ${err.statusCode}`);
        console.log(`Message: ${err.message}`);
    }
};

runCustomErrorPractical();
