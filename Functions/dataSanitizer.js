
function sanitizeInput(input) {
 return input.replace(/[<>]/g," ") 
}

// Function call example
console.log(sanitizeInput("<script>alert('XSS')</script>")); 
// "scriptalert('XSS')/script"
 
  