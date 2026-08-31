// ========================================= Callback Hell Practical ======================================= //
// Is practical me hum dekhenge ki Callbacks ka use kaise hota tha aur "Callback Hell" (Pyramid of Doom) kaise banta tha.
// Scenario: 
// 1. User ki ID se user ka data lana
// 2. Us user ke data se uske orders lana
// 3. Orders se unki delivery status check karna

const runCallbackPractical = () => {
    console.log("=== Callback Hell Ka Asli Use ===\n");

    // 1. User fetch karne ka function
    const getUser = (id, callback) => {
        setTimeout(() => {
            console.log(`User ${id} fetch kiya.`);
            callback({ id: id, username: "tausif_dev" });
        }, 1000);
    };

    // 2. Orders fetch karne ka function
    const getOrders = (username, callback) => {
        setTimeout(() => {
            console.log(`${username} ke orders fetch kiye.`);
            callback(["Pizza", "Burger"]);
        }, 1000);
    };

    // 3. Delivery status check karne ka function
    const getDeliveryStatus = (order, callback) => {
        setTimeout(() => {
            console.log(`${order} ki delivery status check ki.`);
            callback("Out for delivery");
        }, 1000);
    };

    // 🚨 Callback Hell (Pyramid of Doom) Shuru:
    console.log("Process Start...\n");
    
    getUser(101, (user) => {
        getOrders(user.username, (orders) => {
            getDeliveryStatus(orders[0], (status) => {
                console.log(`\nFinal Result: Aapka ${orders[0]} abhi ${status} hai!`);
                console.log("✅ Dekha kitna deep nested (andhar-andhar) code ban gaya? Isko hi Callback Hell kehte hain!");
            });
        });
    });
};

runCallbackPractical();
