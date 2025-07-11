
function passwordStrength(password) {
    
    const length = password.length;
    return length >= 12?"Strong"
 :length >= 8 ? "Moderate" :  "Weak"
}
// Test cases
console.log(passwordStrength("myp@ssword123")); // Output: "Strong"
console.log(passwordStrength("myp@ss1"));       // Output: "Weak"
console.log(passwordStrength("myp@ssword"));    // Output: "Moderate"


  