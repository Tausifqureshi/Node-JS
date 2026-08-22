// ========================================= EventEmitter Extended Class Practical ======================================= //
// Node.js me agar humein ek aisa Object chahiye jo apne khud ke Events release (emit) kare, 
// toh hum apni class ke sath 'EventEmitter' ko 'extend' kar lete hain.

const EventEmitter = require('events');

// Humari class ne EventEmitter ke saare powers le liye hain
class VideoDownloader extends EventEmitter {
    constructor(videoName) {
        super(); // Ye zaroori hai EventEmitter ko jagane ke liye
        this.videoName = videoName;
    }

    startDownload() {
        console.log(`[SYSTEM] Starting download for: ${this.videoName}`);
        
        // 1st Event: Start
        this.emit('start'); 

        let progress = 0;
        
        // Ek fake download process banate hain jo har second progress badhayega
        const interval = setInterval(() => {
            progress += 30; // 30% progress bada
            
            if (progress < 100) {
                // 2nd Event: Progress
                this.emit('progress', progress); 
            } else {
                clearInterval(interval);
                // 3rd Event: Finish
                this.emit('finish'); 
            }
        }, 1000);
    }
}

const runEventEmitterClassPractical = () => {
    console.log("=== Class Extending EventEmitter Ka Asli Use ===\n");

    const downloader = new VideoDownloader("NodeJS_Tutorial.mp4");

    // Humare khud ke banaye hue custom object par 'on' listeners lag gaye hain!
    downloader.on('start', () => {
        console.log("🟢 Download started in background...");
    });

    downloader.on('progress', (percent) => {
        console.log(`⏳ Downloading: ${percent}% completed...`);
    });

    downloader.on('finish', () => {
        console.log("✅ Download completely finished!");
    });

    // Process chalu karna
    downloader.startDownload();
};

runEventEmitterClassPractical();
