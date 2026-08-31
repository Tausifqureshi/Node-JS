// ========================================= Custom Events Practical ======================================= //
// Is practical me hum ek custom 'Notification' system banayenge jahan User Login hone par automatically events trigger honge.
// Ye backend me microservices ya decoupled logic likhne me bahut kaam aata hai.

const EventEmitter = require('events');
const notificationSystem = new EventEmitter();

const runCustomEventsPractical = () => {
    console.log("=== Custom Events Ka Asli Use ===\n");

    // ================= Listener Setup (Ye hamesha Event Emit hone se pehle likhe jate hain) =================
    
    // Listener 1: Email bhejna
    notificationSystem.on('userLoggedIn', (user) => {
        console.log(`✉️ [EMAIL SYSTEM]: Sending Welcome Email to ${user.email}...`);
    });

    // Listener 2: Database me log save karna
    notificationSystem.on('userLoggedIn', (user) => {
        console.log(`💾 [DATABASE]: Saving login time for ${user.username} - ${new Date().toLocaleTimeString()}`);
    });

    // Listener 3: Analytics update karna
    notificationSystem.on('userLoggedIn', () => {
        console.log(`📊 [ANALYTICS]: Active users count increased by 1.`);
    });


    // ================= Actual Action (Emit) =================
    console.log("1. Koi naya user website par aaya...");
    
    setTimeout(() => {
        console.log("2. User ne Login Button dabaya!\n");
        
        const loggedInUser = {
            username: "Tausif_Dev",
            email: "tausif@example.com"
        };

        // Yahan hum sirf ek line ka code run kar rahe hain, 
        // par uske peeche automatically 3 alag-alag systems (Listeners) trigger ho jayenge!
        notificationSystem.emit('userLoggedIn', loggedInUser);

        console.log("\n✅ Success: Ek event fire karne par 3 alag-alag functions successfully run hue!");
    }, 2000);
};

runCustomEventsPractical();
