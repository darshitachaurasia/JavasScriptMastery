
function isValidDate(date) {
const pattern = (/^\d{4}-\d{2}-\d{2}$/)
return pattern.test(date)
}

// Example usage:
console.log(isValidDate("2024-12-31")); // true
console.log(isValidDate("31-12-2024")); // false

  