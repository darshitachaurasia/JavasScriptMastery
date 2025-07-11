
// Function to validate the file extension
function validateFileExtension(fileName) {
  if(fileName.endsWith('jpg')){
    console.log('Valid file type. You can upload the file.')
  }else{
    console.log('Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file')
  }
}

// Test the function
validateFileExtension("profile-picture.jpg");   
// Valid file type. You can upload the file.
validateFileExtension("document.pdf");         
// Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.




/**
function validateFileExtension(fileName) {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const isValid = validExtensions.some(extension => fileName.toLowerCase().endsWith(extension));
  console.log(isValid ? "Valid file type. You can upload the file." : "Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.");
}

// Test the function
validateFileExtension("profile-picture.jpg");   
validateFileExtension("document.pdf");





 */


  