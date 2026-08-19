// ============================================== Tarika 1 (Callback Use - Old Tarika) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Callbacks sabse purana tarika hai asynchronous code handle karne ka. Isme callback hell ban jata tha.

// ChatGPT Se Liya Hua Syntex ---> Yahan humne 'setTimeout' isliye use kiya hai taaki hum 2 second ka fake time/delay create kar sakein (kyuki real API me bhi time lagta hai).

function fetchWithCallback(callback) {
  setTimeout(() => {
    }, 2000); // 2 second ka delay
}      

fetchWithCallback((data) => {
  console.log("Tarika 1 (Old Way) Output:", data);
});


// ============================================== Tarika 2 (Promises) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Ye callback se behtar tarika hai jisme .then() aur .catch() lagta hai.

const fetchWithPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; 
      if (success) {
        resolve({ id: 2, name: "Promise Data" });
      } else {
        reject("Server error!");
      }
    }, 2000);
  });
};

fetchWithPromise()
  .then((data) => {
    console.log("Tarika 2 (Promise Way) Output:", data);
  })
  .catch((err) => {
    console.log("Tarika 2 (Promise Way) Error:", err);
  });


// ============================================== Tarika 3 (Async/Await - New Tarika) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Async/Await sabse naya aur best tarika hai. Interview me yehi batana chahiye!

const getUserAsync = async () => {
  try {
    const data = await fetchWithPromise(); // Wahi upar wala promise function use ho raha hai
    console.log("Tarika 3 (New Way) Output:", data);
  } catch (err) {
    console.log("Tarika 3 (New Way) Error:", err);
  }
};

getUserAsync();
