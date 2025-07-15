class Timer {
  constructor() {
    this.startTime = 0; // Time when the timer started
    this.elapsedTime = 0; // Time elapsed since the timer started
    this.isRunning = false; // Timer state
  }

  // Start the timer
  start() {
   this.startTime = Date.now()
   this.elapsedTime++
   this.isRunning = true
   console.log("timer started")
  }

  // Stop the timer and show elapsed time
  stop() {
   
   this.isRunning = false
   this.elapsedTime = Math.floor((Date.now()-this.startTime)/1000)
   console.log(`time stopped at ${this.elapsedTime}`)
  }

  // Get the elapsed time
  getElapsedTime() {
     this.elapsedTime = Math.floor((Date.now()-this.startTime)/1000)
  console.log(`${this.elapsedTime}`)
  }
}

// Usage example
const timer = new Timer();

// Start the timer
timer.start();
// Expected Output: "Timer started."

// Wait for a few seconds, then check elapsed time
setTimeout(() => {
  timer.getElapsedTime();
  // Expected Output: "Elapsed time: 3 seconds." (depending on how long you wait)
}, 3000);

// Stop the timer after a few more seconds
setTimeout(() => {
  timer.stop();
  // Expected Output: "Timer stopped at 5 seconds."
}, 5000);
