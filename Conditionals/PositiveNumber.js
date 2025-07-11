
// Function to check access based on credentials
function checkNumber() {
   let number = prompt("Enter a number:");
    // Convert the input to a number
    number = parseFloat(number);
    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
// Call the function to check the number
checkNumber();






  