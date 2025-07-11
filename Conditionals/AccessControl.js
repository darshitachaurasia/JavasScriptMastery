
// Function to check access based on credentials
function checkAccess(username, password, role) {
if(password !== "password123" || username !== "admin" ){
    console.log('Invalid username or password')
 }else if(role === "guest"){
 console.log("access denied")
 } else{
    console.log(`${role} accessed`)
 }
}
// Example usage:
checkAccess("admin", "password123", "admin");  // Admin access
checkAccess("admin", "password123", "user");   // User access
checkAccess("admin", "wrongpassword", "admin"); // Invalid password
checkAccess("admin", "password123", "guest");  // Invalid role







  