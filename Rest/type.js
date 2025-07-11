
function groupByType(...args) {
    
    const number = []
    const string = []
    const boolean = []
 args.forEach(arg=> {
    if(typeof arg ===  "string")
        {
        string.push(arg)
    }else if(typeof arg ===  "number")
        {
        number.push(arg)
    }else if(typeof arg ===  "boolean")
        {
        boolean.push(arg)
    }
    
})
return {string,number,boolean}
}

// Example
console.log(groupByType(1, "hello", true, 42, "world"));
// Output: { number: [1, 42], string: ["hello", "world"], boolean: [true] }

  