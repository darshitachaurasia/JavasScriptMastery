
function convertUrlsToLinks(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g; // Regular expression to match URLs.
  return text.replace(urlPattern, (url) => `<a href="${url}" target="_blank">${url}</a>`); // Replace URLs with anchor tags.
}

let updatedText = convertUrlsToLinks("Visit our website at http://example.com for more information. Also, check out https://google.com for other resources.");
console.log(updatedText);
















  