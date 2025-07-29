
function findHTMLTags(htmlString) {
  const pattern =   /</?[^:>]+>/g;
  const isMatch = htmlString.match(pattern)
  return isMatch || []
}

// Example usage:
console.log(findHTMLTags("<div><h1>Hello</h1></div>")); // ["<div>", "<h1>", "</h1>", "</div>"]

  /**function findHTMLTags(htmlString) {
  // Matches opening or closing HTML tags with optional attributes
  const tagRegex = /<\/?[a-zA-Z][^>]*>/g;
  return htmlString.match(tagRegex) || [];
}

// Example usage:
console.log(findHTMLTags("<div><h1>Hello</h1></div>"));
// ["<div>", "<h1>", "</h1>", "</div>"]
console.log(findHTMLTags('<a href="#">Link</a>'));
// ["<a href="#">", "</a>"]
 */