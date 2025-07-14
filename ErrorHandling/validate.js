
function validateURL(url) {
 if (url.startsWith("https://") && url.endsWith(".com")){
    return true
 }else{
    return 'Invalid format'
 }
}

// Function call
console.log(validateURL("https://example.com")); // Expected output: true
console.log(validateURL("htp://example.com"));  // Expected output: "Invalid URL format"

  