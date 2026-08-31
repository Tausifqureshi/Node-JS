// ========================================= MAIN SERVER (App) ======================================= //
// Ye hamari starting point (app.js ya server.js) hoti hai.
// Dekho ye file kitni clean hai! Saara kachra Models aur Controllers me chala gaya.

const express = require('express');
const app = express();

// User ke Routes import kiye
const userRoutes = require('./routes/userRoutes');

// Body parser
app.use(express.json());

// Routes ko apply kiya
// Ab koi bhi request /api/users par aayegi, toh wo sidha userRoutes file me chali jayegi
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to MVC Architecture API!");
});

const runMvcPractical = () => {
    console.log("=== MVC Architecture API Server ===\n");
    
    const PORT = 5005;
    app.listen(PORT, () => {
        console.log(`🚀 Professional MVC Server is running!`);
        console.log(`👉 Home: http://localhost:${PORT}`);
        console.log(`👉 GET Users: http://localhost:${PORT}/api/users`);
        console.log(`Note: Aap ye project structure dhyan se dekho. Asli company projects aise hi bante hain!`);
    });
};

runMvcPractical();
