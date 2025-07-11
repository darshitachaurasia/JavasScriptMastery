


function obfuscateEmail(email) {
  const [local, domain] = email.split("@");
  const obfuscatedLocal = local[0] + "****" + local[local.length - 1];
  return `${obfuscatedLocal}@${domain}`;
}

// Function call example
console.log(obfuscateEmail("Prabir@gmail.com")); 

  


  