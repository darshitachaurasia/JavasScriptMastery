
function safeLoop(iterations) {
  try{ for(let i = 0; i<iterations ;i++){
     if(iterations>550){
        throw  new Error("infinite loop")
     }
     return "successful"
   }} catch(error){
    return error.message
   }
  
}

// Function call
console.log(safeLoop(500));  // Expected output: "Loop completed successfully"
console.log(safeLoop(1500)); // Expected output: "Infinite loop detected"
  