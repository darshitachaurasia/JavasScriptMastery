function generatePassword(length, useSpecialChars) {
  const letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ';
  const specialChars = '!@#$%^&*()_+{}:"><?';
  
  // Combine sets based on useSpecialChars flag
  const allChars = useSpecialChars ? letters + specialChars : letters;

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Function call examples
console.log(generatePassword(10, true));  // e.g. "A3$d@f7XbP"
console.log(generatePassword(8, false));  // e.g. "AbC123XY"
