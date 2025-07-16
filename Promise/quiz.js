
function quizWithTimeout(question, expectedAnswer, timeout) {
  setTimeout(() => {
   const answer=prompt(`${question}`) 
   if (expectedAnswer === answer){
    console.log(correct)
   }
  }, timeout);
}

// Example Usage
quizWithTimeout("What is 2+2?", "4", 3000)
  .then(console.log)
  .catch(console.log);

  /**
function quizWithTimeout(question, expectedAnswer, timeout) {
  console.log(question); // Show the question to the user
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject("Time's up!"); // If time runs out, reject the promise
    }, timeout);

    setTimeout(() => {
      const userAnswer = expectedAnswer; // Simulate user answering correctly
      if (userAnswer === expectedAnswer) {
        clearTimeout(timer); // Stop the timeout
        resolve("Correct!"); // Resolve the promise with "Correct!"
      }
    }, 1000); // Assume user answers within 1 second
  });
}

// Example Usage
quizWithTimeout("What is 2+2?", "4", 3000)
  .then(console.log)
  .catch(console.log);

   */