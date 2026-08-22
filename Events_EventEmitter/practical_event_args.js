// ========================================= Event Arguments & Once Practical ======================================= //
// Kabhi-kabhi hum chahte hain ki event par koi listener sirf EK BAAR chale (jaise Welcome bonus sirf ek baar milta hai).
// Iske liye '.once()' use hota hai.

const EventEmitter = require('events');
const eventManager = new EventEmitter();

const runEventArgPractical = () => {
    console.log("=== Event Arguments aur .once() Ka Asli Use ===\n");

    // .on() : Ye har baar chalega jab 'purchase' event fire hoga
    eventManager.on('purchase', (item, price) => {
        console.log(`🛒 You bought a ${item} for $${price}. Thank you!`);
    });

    // .once() : Ye sirf Zindagi me pehli baar chalega, phir automatically remove ho jayega
    eventManager.once('purchase', () => {
        console.log(`🎁 [SPECIAL BONUS]: 1st Purchase par aapko 50% discount coupon mila hai!`);
    });

    console.log("--- Pehli Purchase ---");
    eventManager.emit('purchase', 'Laptop', 1000); // Yahan dono chalenge

    console.log("\n--- Dusri Purchase ---");
    eventManager.emit('purchase', 'Mouse', 50); // Yahan sirf .on() wala chalega, bonus nahi milega!

    console.log("\n✅ Success: '.once()' ne apna kaam correctly kiya.");
};

runEventArgPractical();
