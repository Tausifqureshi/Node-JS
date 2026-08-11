// ========================================= Error Handling Practical ============================================ //

// Synchronous Error Handling (Try/Catch)
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Zero se divide nahi kar sakte!"); // Apna custom error banaya
    }
    const result = a / b;
    console.log(`Result of ${a} / ${b} =`, result);
  } catch (error) {
    console.log("❌ Error Pakda Gaya:", error.message);
  } finally {
    console.log("✔️ Ye code block hamesha chalega (chahye error ho ya na ho)\n");
  }
}

divide(10, 2); // Success
divide(10, 0); // Error ayega, par server crash nahi hoga kyuki Try/Catch me hai


// Asynchronous (Promises) Error Handling
const someAsyncTask = Promise.reject("Yeh database ka kuch error hai.");

someAsyncTask
  .then((res) => console.log(res))
  .catch((err) => console.log("❌ Async Error Pakda Gaya:", err));
