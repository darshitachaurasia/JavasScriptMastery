
function checkLogin(isLoggedIn) {
   return isLoggedIn? "welcome":"login";
}

// Test cases
console.log(checkLogin(true));   // Output: "Welcome User"
console.log(checkLogin(false));  // Output: "Please Login"

  