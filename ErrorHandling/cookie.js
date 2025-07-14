
function getCookieValue(cookieName) {
try{
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(cookieName + '='));
 if(!value){
    throw new Error("cookie not found")
 }else{
    return true
 }
}catch(error){
    return error.message
}
}

// Function call (Make sure the cookie "sessionId" is set in your browser)
console.log(getCookieValue("sessionId")); // Expected output: Value of "sessionId" cookie or "Cookie not found"

  