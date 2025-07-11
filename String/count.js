
function countOccurrences(str, word) {
let word = String.includes(str)
word++
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);


  /**
function countOccurrences(str, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
 // 'g' for global search, 'i' for case-insensitive search
    const matches = str.match(regex);
    return matches ? matches.length : 0; 
// Return the count of occurrences or 0 if none found
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);




 */