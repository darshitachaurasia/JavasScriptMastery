
// Create a boolean variable 'isLogin' and assign a value to it
let isLogin = true; 
// Change this to false to test the 'not logged in' case
// Function to check login status
function checkLoginStatus() {
   if(!isLogin){
    console.log('not logged in')
    return false
   }else{
    console.log('logged in')
   }
   
  
}
// Call the function to check the login status
checkLoginStatus();

  