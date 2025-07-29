
function findPhoneNumbers(text) {
  
  const pattern = /(?:\(\d{3}\)\s?|\d{3}[- ]?)\d{3}[- ]?\d{4}/g;
  const isMatch = text.match(pattern)
  return isMatch || []
 
}

// Example usage:
console.log(findPhoneNumbers("Call me at (123) 456-7890 or 123-456-7890"));
// ["(123) 456-7890", "123-456-7890"]

  