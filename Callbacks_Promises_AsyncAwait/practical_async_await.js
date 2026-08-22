// ========================================= Async/Await Practical ======================================= //
// Async/Await aaj ke time me sabse best aur modern tarika hai.
// Ye background me Promises hi use karta hai, par code dikhne me bilkul Synchronous lagta hai.

const runAsyncAwaitPractical = async () => {
    console.log("=== Async/Await Ka Asli Use ===\n");

    const getUser = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`User ${id} fetch kiya.`);
                resolve({ id: id, username: "tausif_dev" });
            }, 1000);
        });
    };

    const getOrders = (username) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${username} ke orders fetch kiye.`);
                resolve(["Pizza", "Burger"]);
            }, 1000);
        });
    };

    const getDeliveryStatus = (order) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${order} ki delivery status check ki.`);
                resolve("Out for delivery");
            }, 1000);
        });
    };

    // ✨ Async/Await (Super Clean Code)
    console.log("Process Start...\n");

    try {
        // await keyword execution ko tab tak roke rakhta hai jab tak promise resolve na ho jaye
        const user = await getUser(101);
        const orders = await getOrders(user.username);
        const status = await getDeliveryStatus(orders[0]);

        console.log(`\nFinal Result: Aapka ${orders[0]} abhi '${status}' hai!`);
        console.log("✅ Dekha? Ye sabse clean aur readable code hai (Synchronous jaisa)!");

    } catch (err) {
        console.log("Try-catch ne error pakda:", err);
    }
};

runAsyncAwaitPractical();
