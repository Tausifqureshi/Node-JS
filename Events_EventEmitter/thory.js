// ========================================= Events in Node.js ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Events kya hote hain?
// Node.js "Event-Driven Architecture" par chalta hai. Iska matlab hai ki jab bhi koi action (event) hota hai (jaise file read hona, ya API ki request aana), toh uske response me ek function (listener) chal jata hai.

// ========================================= EventEmitter Class ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Custom events kaise banayein?
// Node.js me ek built-in module hota hai jiska naam 'events' hai. Iske andar 'EventEmitter' naam ki class hoti hai, jiske use se hum apne khud ke custom events bana sakte hain.
// 1. on(eventName, listener): Ye event ko sunta (listen/wait) karta hai. Jab bhi event fire hoga, ye callback function chala dega.
// 2. emit(eventName, [data]): Ye us event ko trigger (fire) karne ke liye use hota hai. 

// Note: Node.js ka poora architecture (jaise HTTP server, File Streams) inhi Events ke upar hi bana hua hai.

const eventEmitterExample = () => {
    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();

    console.log("=== EventEmitter Example ===");

    // 1. Event ko sunna (Listen - on)
    myEmitter.on('orderPlaced', (foodName, quantity) => {
        console.log(`[EVENT TRIGGERED] Restaurant ne dekha: Order aaya hai -> ${quantity}x ${foodName}`);
        console.log("Kitchen me order ban na shuru ho gaya!");
    });

    // Hum ek event ke upar multiple listeners bhi laga sakte hain
    myEmitter.on('orderPlaced', (foodName) => {
        console.log(`[SYSTEM LOG] Bill generate ho raha hai ${foodName} ke liye...`);
    });

    console.log("Waiting for event...");

    // 2. Event ko fire karna (Emit)
    // Ye line chlte hi upar wale dono functions automatically chal jayenge
    setTimeout(() => {
        myEmitter.emit('orderPlaced', 'Pizza', 2);
    }, 1500);
};

// eventEmitterExample();
