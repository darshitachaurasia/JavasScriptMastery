
function storeUserData(user) {
let store = JSON.stringify(user);
localStorage.setItem("user",store);
console.log(store);
console.log("user data stored in local")
}

// Example usage:
let user = { name: "Alice", age: 30 };
storeUserData(user);


  