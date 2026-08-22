// ========================================= Promises Practical ======================================= //
// Promises ne Callback Hell ki problem ko solve kiya. 
// Ab code andar ki taraf (nested) nahi jata, balki ek seedhi chain (chaining) me chalta hai `.then()` ka use karke.

const runPromisePractical = () => {
    console.log("=== Promises Ka Asli Use ===\n");

    const getUser = (id) => {
        return new Promise((resolve, reject) => {
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

    // ✨ Promise Chaining (Clean Code)
    console.log("Process Start...\n");

    getUser(101)
        .then(user => getOrders(user.username))
        .then(orders => getDeliveryStatus(orders[0]))
        .then(status => {
            console.log(`\nFinal Result: Aapka order abhi '${status}' hai!`);
            console.log("✅ Dekha? Ab code ek chain me hai, andar nahi gaya!");
        })
        .catch(err => {
            console.log("Koi error aagaya: ", err);
        });
};

runPromisePractical();
