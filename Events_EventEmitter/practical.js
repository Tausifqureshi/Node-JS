// ========================================= Events & EventEmitter Practical ============================================ //
// Node.js me custom event banana aur chalana.

const EventEmitter = require("events");

// EventEmitter class ka ek naya object banate hain
const myEmitter = new EventEmitter();

// ============================================== Event Listener ('on') ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Yahan humne event ko 'on' (listen) kiya. Jab bhi 'orderPlaced' naam ka event fire hoga, ye function automatically chalega.

myEmitter.on("orderPlaced", (pizzaType, size) => {
  console.log(`\n[EVENT SUCCESS] - Aapka ${size} size ka ${pizzaType} pizza order ho gaya hai!`);
});

// Hum ek hi event par multiple listeners bhi laga sakte hain (ye bhi sath me chalega)
myEmitter.on("orderPlaced", (pizzaType) => {
  if (pizzaType === "Cheese") {
    console.log(`[BONUS] - Badhai ho! Cheese pizza ke sath extra cheese free!`);
  }
});

// ============================================== Event Trigger ('emit') ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Ab hum event ko 'emit' (trigger) karenge. Ye code jahan se chalega wahan se signal listener tak jayega.

console.log("User ne app par order button dabaya...");

// Event fire kar rahe hain 'Cheese' aur 'Large' data ke sath
myEmitter.emit("orderPlaced", "Cheese", "Large");

// Agar hum ise dobara alag data ke sath emit karenge toh listeners fir chalenge
// myEmitter.emit("orderPlaced", "Veggie", "Medium");
