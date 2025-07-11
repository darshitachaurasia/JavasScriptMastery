
function buttonState(isValid, isSubmitted) {
    return isSubmitted ? "disabled" : isValid? "enabled" : "pending"
}

// Test cases
console.log(buttonState(false, true));    // Output: "Disabled"
console.log(buttonState(true, false));    // Output: "Enabled"
console.log(buttonState(false, false));   // Output: "Pending Validation"
console.log(buttonState(true, true));     // Output: "Disabled"

  