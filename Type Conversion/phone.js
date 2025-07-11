
 // Convert to string and remove non-numeric characters
  let cleanedPhoneNumber = String(phoneInput).replace(/D/g, ''); 

  // Ensure the phone number has exactly 10 digits
  if (cleanedPhoneNumber.length === 10) {
    console.log("Valid phone number:", cleanedPhoneNumber);  // "5551234567"
  } else {
    console.log("Invalid phone number format");
  }

