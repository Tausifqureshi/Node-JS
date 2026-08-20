// --------------------------------------------- Handling Asynchronous Code --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Node.js me Asynchronous code (jo background me time leta hai) ko handle karne ke 3 main tarike hain.

// --------------------------------------------- Tarika 1: Callbacks (Old Way) --------------------------------------------- //
// - Ye sabse purana tarika tha. Isme hum ek function pass karte hain jo background task pura hone par execute hota tha.
// - Problem (Callback Hell): Agar ek task ke andar dusra, aur dusre ke andar teesra task karna ho, toh code ka structure "Pyramid of Doom" ban jata tha. Isko debug aur padhna bahut mushkil hota tha.

// --------------------------------------------- Tarika 2: Promises (Better Way) --------------------------------------------- //
// - Promise ek aisi object hai jo kisi asynchronous operation ke "future" me pura hone (ya fail hone) ki guarantee deti hai.
// - Iski 3 states hoti hain:
//   1. Pending: Kaam background me chal raha hai.
//   2. Fulfilled (Resolved): Kaam successfully ho gaya.
//   3. Rejected: Kaam me koi error aa gaya.
// - Isme hum success ke liye `.then()` aur error ke liye `.catch()` use karte hain. Isse Callback Hell wali problem kafi hadd tak solve hui.

// --------------------------------------------- Tarika 3: Async/Await (Modern Best Practice) --------------------------------------------- //
// - Ye Promises ke upar ek "Syntactic Sugar" hai. Matlab background me chal toh Promises hi rahe hain, par likhne ka style ekdum saaf aur Synchronous (seedha) lagta hai.
// Note: Function ke aage 'async' lagane se wo hamesha Promise return karta hai. 'await' lagane se us line par tab tak aage ka code execution "pause" (ruk) jata hai jab tak Microtask Queue se promise ka result na aa jaye. (Yahan dhyaan rahe, 'await' sirf us function ko pause karta hai, pure Node.js server ko block nahi karta!)
// - Errors pakadne ke liye isme 'try...catch' block ka use kiya jata hai. Interview me ye tarika batana sabse best hota hai.
