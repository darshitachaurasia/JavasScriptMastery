
function calculateTimeDifference(time1, time2) {
    const[hour1,minutes1] = time1.split(':').map(Number);
    const[hour2,minutes2] = time2.split(':').map(Number);
    const totalMinutes1 = hour1*60 + minutes1;
    const totalMinutes2 = hour2*60 + minutes2;

    totalMinDiff = Math.abs(totalMinutes2 - totalMinutes1)

    return (totalMinDiff/60).toFixed(2)

}

// Example usage:
console.log(calculateTimeDifference("08:30", "17:45")); // Output: 9.25
console.log(calculateTimeDifference("09:00", "14:30")); // Output: 5.50
