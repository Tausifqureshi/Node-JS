// ========================================= Call Stack Practical ======================================= //
// Ye practical dikhata hai ki JavaScript ka Call Stack kaise function karta hai (LIFO - Last In First Out).
// Aur kyu humara main thread block nahi hona chahiye.

const runCallStackPractical = () => {
    console.log("=== Call Stack (LIFO) Kaise Kaam Karta Hai ===\n");

    const functionOne = () => {
        console.log("-> Function One Execution Start");
        functionTwo();
        console.log("-> Function One Execution End");
    };

    const functionTwo = () => {
        console.log("  -> Function Two Execution Start");
        functionThree();
        console.log("  -> Function Two Execution End");
    };

    const functionThree = () => {
        console.log("    -> Function Three Execution Start");
        console.log("    -> Function Three Execution End");
    };

    // Yahan hum pehle function ko call kar rahe hain
    console.log("Main Execution Context Started");
    functionOne();
    console.log("Main Execution Context Ended");

    // Output logic:
    // Pehle One call hoga, fir wo wait karega Two ke khatam hone ka.
    // Two wait karega Three ke khatam hone ka.
    // Isliye Three sabse pehle End print karega (Last in, First Out).
};

runCallStackPractical();
