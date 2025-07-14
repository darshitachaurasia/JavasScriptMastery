
function validateForm(formData) {
 try{
  for (let key in formData) {
      if (formData[key] === "") {
        throw new Error("Form validation failed");
      }
    }
  return true
 }catch(error){
   return error.message
 }
}

// Function call
console.log(validateForm({ name: "Prabir", email: "Prabir@gmail.com" })); // Expected output: true
console.log(validateForm({ name: "Prabir", email: "" })); // Expected output: "Form validation failed"

  