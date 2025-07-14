
function safeDivide(a, b) {
  try{
     if(b === 0){
        throw new Error("Not divisble")
    }
    return a/b
  }catch(err){
   
    return err.message;
  }

  
}

// Function call
console.log(safeDivide(10, 2)); // Expected output: 5
console.log(safeDivide(10, 0)); // Expected output: "Cannot divide by zero"


  