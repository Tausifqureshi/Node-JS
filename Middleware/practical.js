// ========================================= Middleware Practical Concept ============================================ //
// Ye ek basic Express.js middleware ka example hai (bina express install kiye samajhne ke liye structure)

// Dummy request and response objects
const req = { url: "/home", method: "GET" };
const res = { send: (msg) => console.log("Response Bheja:", msg) };

// 1. Logger Middleware (Har request par chalega)
const loggerMiddleware = (req, res, next) => {
  console.log(`[LOG] Time: ${new Date().toLocaleTimeString()} - Request aayi: ${req.method} ${req.url}`);
  next(); // Next function (ya route) ko call karna zaroori hai
};

// 2. Auth Middleware (Security ke liye)
const authMiddleware = (req, res, next) => {
  const isUserLoggedIn = true; // Isko false karenge to next route nahi chalega
  
  if (isUserLoggedIn) {
    console.log("[AUTH] User logged in hai, aage badhne do.");
    next();
  } else {
    console.log("[AUTH] Access Denied! Please login.");
    res.send("Error 401: Unauthorized"); // next() call nahi kiya, yahin se wapas bhej diya
  }
};

// 3. Final Route Handler (Ye aakhiri function hai)
const homeRouteHandler = (req, res) => {
  console.log("[ROUTE] Final Handler chal raha hai...");
  res.send("Welcome to the Home Page!");
};


// Execute the flow (Ek real server isi flow me chalata hai)
console.log("--- Request Flow Started ---");
loggerMiddleware(req, res, () => {
  authMiddleware(req, res, () => {
    homeRouteHandler(req, res);
  });
});
console.log("--- Request Flow Ended ---");
