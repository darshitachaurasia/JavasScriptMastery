
function createIdGenerator() {
     let id = 0
    return{
    next : (i) => i = ++id
 }
}

// Usage
const idGenerator = createIdGenerator();
console.log(idGenerator.next()); // 1
console.log(idGenerator.next()); // 2

  