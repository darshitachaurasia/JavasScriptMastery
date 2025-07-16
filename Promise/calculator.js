
function calculator(initialValue) {
  
}

// Example Usage
calculator(5)
  .add(10)
  .subtract(3)
  .multiply(2)
  .getResult()
  .then(console.log);

  /**
   * 
function calculator(initialValue) {
  let value = initialValue;

  return {
    add(num) {
      return new Promise((resolve) => {
        value += num;
        resolve(this);
      });
    },
    subtract(num) {
      return new Promise((resolve) => {
        value -= num;
        resolve(this);
      });
    },
    multiply(num) {
      return new Promise((resolve) => {
        value *= num;
        resolve(this);
      });
    },
    getResult() {
      return new Promise((resolve) => {
        resolve(value);
      });
    },
  };
}

// Example Usage
calculator(5)
  .add(10)
  .subtract(3)
  .multiply(2)
  .getResult()
  .then(console.log);

  
   */