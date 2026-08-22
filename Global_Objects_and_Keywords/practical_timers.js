// ========================================= Global Timers Practical ======================================= //
// Node.js me setTimeout aur setInterval directly available hote hain.

const runTimersPractical = () => {
    console.log("=== Timers Ka Asli Use ===\n");
    
    let counter = 0;

    console.log("1. Interval shuru ho raha hai (Har 1 second me chalega)...");
    
    // setInterval hamesha chalta rahega jab tak hum ise roke na
    const intervalId = setInterval(() => {
        counter++;
        console.log(`Tick... ${counter}`);

        if (counter === 5) {
            console.log("\n2. 5 second poore ho gaye. Ab hum is interval ko rok denge (Cleanup).");
            clearInterval(intervalId); // Interval ko rokna (Cleanup)
            
            console.log("✅ Success: Timer aur Cleanup successfully chala!");
        }
    }, 1000);
};

runTimersPractical();
