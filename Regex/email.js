
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-z]{2,}$/
  return emailPattern.test(email)
}

// Example usage:
console.log(isValidEmail("example@gmail.com")); // true
console.log(isValidEmail("example@.com")); // false

  