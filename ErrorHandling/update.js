
function updateElementText(selector, text) {
 try{

const element = document.querySelector(selector)
  if(!element){
    throw new Error("Element not found")
  }else{
    element.innerText = text
    return "updated"
  }
 }catch(error){
     return error.message
 }
}

// Function call (Make sure there's an element with id 'myDiv' in the HTML)
console.log(updateElementText("#myDiv", "Hello World")); // Expected output: "Element updated successfully"
console.log(updateElementText("#nonExistingElement", "Hello World")); // Expected output: "Element not found"

  