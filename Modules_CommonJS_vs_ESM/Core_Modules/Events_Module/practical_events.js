const EventEmitter = require('events'); 

console.log("=== Events Module Demo ===\n");

// Event manager (emitter) ka object banaya
const myEmitter = new EventEmitter();

// 1. Event Listener banaya (Kaan lagakar sunna)
// Jab bhi 'userLoggedIn' naam ka event fire hoga, ye block chalega.
myEmitter.on('userLoggedIn', (name, role) => {
    console.log(`✅ EVENT TRIGGERED: Welcome ${name}! Aapka role hai: ${role}`);
});

// 2. Event Fire (Emit) karna
console.log("⏳ Event fire hone ka intezar kar rahe hain...");
setTimeout(() => {
    console.log("🔥 Event Fire ho raha hai!");
    myEmitter.emit('userLoggedIn', 'Tausif Bhai', 'Admin'); // Yahan se data pass kiya
}, 2000);
