
function getQueryParameter(url, parameter) {
  // Create a URL object to easily parse query parameters
  const urlObj = new URL(url);
  return urlObj.searchParams.get(parameter); // Returns the value of the parameter
}

// Example usage:
console.log(getQueryParameter("https://example.com?id=123&name=chandra", "id")); // "123"

  