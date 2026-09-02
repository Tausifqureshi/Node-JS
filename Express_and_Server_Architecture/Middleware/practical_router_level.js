// ========================================= Router-Level Middleware Practical ======================================= //
// Router level middleware sirf kisi ek specific URL/Route par lagta hai.
// Real-world example: "Auth Checker". Dashboard sirf logged-in user dekh paye, home page sab dekh payein.

const express = require('express');
const app = express();

const runRouterLevelPractical = () => {
    console.log("=== Router Level Middleware (Authentication) ===\n");

    // Middleware: Check if user is logged in
    const checkLogin = (req, res, next) => {
        // Manlo query me ?user=admin bheja gaya hai
        // Real Case: Check karna ki user login hai ya nahi. Yahan hum req.query se user nikal rahe hain, par asli app me ye token req.headers ya cookies se aata hai.
        const user = req.query.user;

        if (user === 'admin') {
            console.log("✅ Security Passed: User is Admin.");
            next(); // Aage Dashboard par jane do
        } else {
            console.log("❌ Security Failed: Unauthorized user.");
            res.send("<h1 style='color:red;'>Access Denied! You are not logged in as Admin.</h1>");
        }
    };

    // Yahan humne middleware NAHI lagaya (Sabke liye open)
    app.get('/', (req, res) => {
        res.send("<h1>🏠 Public Home Page</h1><p>Anyone can see this.</p>");
    });

    // Yahan humne middleware LAGAYA hai (Sirf admin ke liye)
    app.get('/dashboard', checkLogin, (req, res) => {
        res.send("<h1 style='color:green;'>🔒 Secret Admin Dashboard</h1><p>Welcome Boss!</p>");
    });

    const PORT = 4002;
    app.listen(PORT, () => {
        console.log(`🚀 Auth Server is running!`);
        console.log(`👉 Public Page: http://localhost:${PORT}`);
        console.log(`👉 Blocked Dashboard: http://localhost:${PORT}/dashboard`);
        console.log(`👉 Allowed Dashboard: http://localhost:${PORT}/dashboard?user=admin`);
    });
};

runRouterLevelPractical();
