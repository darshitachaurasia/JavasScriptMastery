
function createDropdownManager() {
   let isOpen = false;
    return {
        toggle : () => isOpen = !isOpen , 
        getState : () => isOpen
    }
}

// Usage
const dropdown = createDropdownManager();
console.log(dropdown.getState()); // false
dropdown.toggle();
console.log(dropdown.getState()); // true

  