function calculateTimeRemaining(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const diff = end - start;
  const totalSeconds = Math.floor(diff / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
}


// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }
