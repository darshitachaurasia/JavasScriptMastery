
function getDomain(url) {
 const urlObj = new URL(url);
  return urlObj.hostname;
}

// Example usage:
console.log(getDomain("https://www.example.com/path")); // "www.example.com"

  