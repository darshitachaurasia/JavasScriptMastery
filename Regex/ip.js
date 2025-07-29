
function isValidIP(ip) {
  const pattern = /^\d{3}.\d{3}.\d{1}.\d{1} $/
  return pattern.test(ip)
}

// Example usage:
console.log(isValidIP("192.168.1.1")); // true
console.log(isValidIP("999.999.999.999")); // false

  /**
function isValidIP(ip) {
  // Regular expression for IPv4 addresses
  const ipv4Regex = /^(25[0-5]|2[0-4]d|1d{2}|d{1,2})(.(?!$)){3}(25[0-5]|2[0-4]d|1d{2}|d{1,2})$/;
  return ipv4Regex.test(ip); // Returns true for valid IPv4, false otherwise
}

// Example usage:
console.log(isValidIP("192.168.1.1")); // true
console.log(isValidIP("999.999.999.999")); // false

   */