// ========================================= Callbacks (Old Way) ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Node.js me Asynchronous code ko handle karne ke 3 main tarike hain.
// 1. Ye sabse purana tarika tha. Isme hum ek function pass karte hain jo background task pura hone par execute hota tha.
// 2. Problem (Callback Hell): Agar ek task ke andar dusra, aur dusre ke andar teesra task karna ho, toh code ka structure "Pyramid of Doom" ban jata tha.

const callbackExample = () => {
    // Example mock function for demonstration (bina kisi file ke run karne ke liye)
    const fetchUser = (id, callback) => {
        setTimeout(() => {
            console.log("1. User fetch ho gaya");
            callback(null, { id: id, name: "Tausif" });
        }, 1000);
    };

    console.log("=== Callback Example ===");
    fetchUser(101, (err, user) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("User Data:", user.name);
        }
    });
};
// callbackExample();


// ========================================= Promises (Better Way) ======================================= //
// 1. Promise ek aisi object hai jo kisi asynchronous operation ke "future" me pura hone (ya fail hone) ki guarantee deti hai.
// 2. Iski 3 states hoti hain: Pending, Fulfilled (Resolved), aur Rejected.
// 3. Isme hum success ke liye `.then()` aur error ke liye `.catch()` use karte hain. Isse Callback Hell solve hui.

const promiseExample = () => {
    const fetchUserPromise = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("1. User fetch ho gaya (Promise se)");
                resolve({ id: id, name: "Tausif" });
                // reject(new Error("User nahi mila")); // Error check karne ke liye isko uncomment karein
            }, 1000);
        });
    };

    console.log("\n=== Promise Example ===");
    fetchUserPromise(101)
        .then(user => console.log("Promise Success! Data:", user.name)) 
        .catch(err => console.log("Promise Fail! Error:", err.message));
};
// promiseExample();


// ========================================= Async/Await (Modern Best Practice) ======================================= //
// 1. Ye Promises ke upar ek "Syntactic Sugar" hai. Background me chal toh Promises hi rahe hain, par likhne ka style ekdum saaf aur Synchronous lagta hai.
// Note: Function ke aage 'async' lagane se wo Promise return karta hai. 'await' us line par code ko "pause" kar deta hai.
// 2. Errors pakadne ke liye isme 'try...catch' block ka use kiya jata hai. Interview me ye tarika batana sabse best hota hai.

const asyncAwaitExample = async () => {
    const fetchUserPromise = (id) => {
        return new Promise((resolve) => setTimeout(() => resolve({ id: id, name: "Tausif" }), 1000));
    };

    console.log("\n=== Async/Await Example ===");
    try {
        console.log("Fetching user...");
        const user = await fetchUserPromise(101); 
        console.log("Async/Await Success! Data:", user.name);
    } catch (err) {
        console.log("Oops Error aa gaya:", err.message);
    }
};
// asyncAwaitExample();
