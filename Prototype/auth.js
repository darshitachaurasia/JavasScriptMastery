// Simple User Authentication System

class AuthenticationSystem {
  constructor() {
    this.user = null;  // Initially, no user is registered
  }

  // Register a new user
  registerUser(username, password) {
   this.username = username 
   this.password = password
  }

  // Login with username and password
  login(username, password) {
   this.registerUser.password == password
   this.registerUser.username == username
}

// Usage example

const authSystem = new AuthenticationSystem();

// Register a user
console.log(authSystem.registerUser("john_doe", "password123"));
// Expected Output: "User registered successfully!"

// Try to register again (should give an error)
console.log(authSystem.registerUser("john_doe", "newpassword"));
// Expected Output: "A user is already registered."

// Login with correct credentials
console.log(authSystem.login("john_doe", "password123"));
// Expected Output: "Login successful!"

// Login with incorrect credentials
console.log(authSystem.login("john_doe", "wrongpassword"));
// Expected Output: "Invalid username or password!"

/**Simple User Authentication System

class AuthenticationSystem {
  constructor() {
    this.user = null;  // Initially, no user is registered
  }

  // Register a new user
  registerUser(username, password) {
    if (this.user) {
      return "A user is already registered.";
    }
    this.user = { username, password };
    return "User registered successfully!";
  }

  // Login with username and password
  login(username, password) {
    if (this.user && this.user.username === username && this.user.password === password) {
      return "Login successful!";
    }
    return "Invalid username or password!";
  }
}

// Usage example

const authSystem = new AuthenticationSystem();

// Register a user
console.log(authSystem.registerUser("john_doe", "password123"));
// Expected Output: "User registered successfully!"

// Try to register again (should give an error)
console.log(authSystem.registerUser("john_doe", "newpassword"));
// Expected Output: "A user is already registered."

// Login with correct credentials
console.log(authSystem.login("john_doe", "password123"));
// Expected Output: "Login successful!"

// Login with incorrect credentials
console.log(authSystem.login("john_doe", "wrongpassword"));
// Expected Output: "Invalid username or password!" */