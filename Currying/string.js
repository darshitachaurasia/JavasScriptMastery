
 function concatStrings(str1) {
  
  return function (str2){
    return (`${str1}` + `${str2}`)
  }

}

console.log(concatStrings("Hello")("World")); // Output: "HelloWorld"

