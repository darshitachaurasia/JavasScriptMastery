
function fileUploadStatus(progress) {
    return  progress === 100 ? "Upload Complete"
    : progress > 0 ? "Uploading..."
:  "Not Started";
}

// Test cases
console.log(fileUploadStatus(100)); // Output: "Upload Complete"
console.log(fileUploadStatus(50));  // Output: "Uploading..."
console.log(fileUploadStatus(0));   // Output: "Not Started"
console.log(fileUploadStatus(75));  // Output: "Uploading..."
console.log(fileUploadStatus(10));  // Output: "Uploading..."

  