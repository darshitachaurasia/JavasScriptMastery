
function createFieldValidator() {
  const fields = {
    email: [
        (value) => value.endsWith('.com') 
    ],
  };
  return {
    addField : (field,validatorFn) => {if(!fields[field]){
        fields[field] = [];
    } fields[field].push(validatorFn) },
    validate : (field,value) => { 
        const validators = fields[field];
        if(!validators) return false ;
          return validators.every(fn => fn(value));
    }
  }
}

// Usage
const validator = createFieldValidator();
validator.addField('email', value => value.includes('@'));
console.log(validator.validate('email', 'test@example.com')); // true
console.log(validator.validate('email', 'testexample.com')); // false

  