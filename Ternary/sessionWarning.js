
function sessionWarning(timeLeft) {
   return timeLeft <= 0 ? "Session Expired " 
   : timeLeft <= 5 ? "Warning: Session about to expire" 
     : "Session Active"
}

// Test cases
console.log(sessionWarning(0));   // Output: "Session Expired"
console.log(sessionWarning(3));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(5));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(10));  // Output: "Session Active"
console.log(sessionWarning(-1));  // Output: "Session Expired"

  