
function validateEmail(email) {
  try{
   if( !email.includes("@") || !email.endsWith(".com")){
       throw new Error("Invalid")
   }else{return true}
   
  }catch(error){
    return error.message;
  }
}

// Function call
console.log(validateEmail("example@example.com")); // Expected output: true
console.log(validateEmail("example.com"));        // Expected output: "Invalid email format"

  