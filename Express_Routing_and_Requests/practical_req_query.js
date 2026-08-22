// ========================================= req.query Practical ======================================= //
// req.query mostly products search, filter aur sort karne ke kaam aata hai (Jaise Flipkart).

const express = require('express');
const app = express();

const runReqQueryPractical = () => {
    console.log("=== req.query Ka Asli Use ===\n");

    const products = [
        { id: 1, name: "iPhone 13", category: "mobile", price: 60000 },
        { id: 2, name: "Macbook Air", category: "laptop", price: 90000 },
        { id: 3, name: "Samsung S23", category: "mobile", price: 70000 }
    ];

    // Yahan route me '?category=mobile' likhne ki zarurat nahi hoti, Express usko khud pakad leta hai
    app.get('/api/products', (req, res) => {
        // 'req.query' se values nikali
        const categoryFilter = req.query.category;
        const maxPrice = req.query.maxPrice;

        let filteredProducts = products;

        // Agar user ne category filter lagaya hai
        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
        }

        // Agar user ne maxPrice filter lagaya hai
        if (maxPrice) {
            filteredProducts = filteredProducts.filter(p => p.price <= parseInt(maxPrice));
        }

        res.json({
            success: true,
            totalFound: filteredProducts.length,
            data: filteredProducts
        });
    });

    const PORT = 5002;
    app.listen(PORT, () => {
        console.log(`🚀 Query Server chal gaya!`);
        console.log(`👉 Sabhi products (No filter): http://localhost:${PORT}/api/products`);
        console.log(`👉 Sirf Mobiles (Category Filter): http://localhost:${PORT}/api/products?category=mobile`);
        console.log(`👉 Mobiles Under 65000 (Multi Filter): http://localhost:${PORT}/api/products?category=mobile&maxPrice=65000`);
    });
};

runReqQueryPractical();
