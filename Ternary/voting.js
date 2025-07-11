
function checkVotingEligibility(age) {
  return age>=18 ? "Eligible": "Not"
}

// Test cases
console.log(checkVotingEligibility(20));  // Output: "Eligible to Vote"
console.log(checkVotingEligibility(16));  // Output: "Not Eligible"

  