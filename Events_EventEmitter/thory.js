// --------------------------------------------- Events in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Events kya hote hain?
// Node.js "Event-Driven Architecture" par chalta hai. Iska matlab hai ki jab bhi koi action (event) hota hai (jaise file read hona, ya API ki request aana), toh uske response me ek function (listener) chal jata hai.

// --------------------------------------------- EventEmitter Class --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Custom events kaise banayein?
// Node.js me ek built-in module hota hai jiska naam 'events' hai. Iske andar 'EventEmitter' naam ki class hoti hai, jiske use se hum apne khud ke custom events bana sakte hain aur unhe jab chahein trigger (fire) kar sakte hain.

// --------------------------------------------- 2 Main Methods (on aur emit) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->
// 1. on(eventName, listener): Ye event ko sunta (listen/wait) karta hai. Jab bhi event fire hoga, ye apne andar ka callback function chala dega.
// 2. emit(eventName, [data]): Ye us event ko trigger (fire) karne ke liye use hota hai. Hum chahe toh event ke sath kuch extra data bhi pass kar sakte hain.

// Note: Node.js ka poora architecture (jaise HTTP server, File Streams) inhi Events ke upar hi bana hua hai.
