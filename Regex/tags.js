
function findHashtags(text) {
  const pattern =  /#\w+/g;
  const isMatch = text.match(pattern)
  return isMatch || []
}

// Example usage:
console.log(findHashtags("I love #coding and #webdev")); // ["#coding", "#webdev"]

  