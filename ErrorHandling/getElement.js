
function getElement(arr, index) {
  try{
    if(arr.length<index){
        throw new Error("Out of Range")
    }
    else{
        return arr[index]
    }
  }
  catch(error){
    return error.message
  }
}

// Function call
console.log(getElement([1, 2, 3], 1)); // Expected output: 2
console.log(getElement([1, 2, 3], 5)); // Expected output: "Index out of range"


  