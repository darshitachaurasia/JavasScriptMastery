
function aggregateScores(...scores) {
 return scores.reduce((total,value)=> total+value,0)
}

// Example
console.log(aggregateScores(
  { user: "Prabir sir", score: 10 },
  { user: "Mithun sir", score: 15 },
  { user: "Prabir sir", score: 20 }
));
// Output: { "Prabir sir": 30, "Mithun sir": 15 }

/**
 * 
function aggregateScores(...scores) {
  return scores.reduce((aggregated, { user, score }) => {
    if (!aggregated[user])
    aggregated[user] = 0;
    aggregated[user] += score;
    return aggregated;
  }, {});
}

// Example
console.log(aggregateScores(
  { user: "Prabir sir", score: 10 },
  { user: "Mithun sir", score: 15 },
  { user: "Prabir sir", score: 20 }
));
// Output: { "Prabir sir": 30, "Mithun sir": 15 }

  
 */

  