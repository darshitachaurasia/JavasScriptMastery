
function Dropdown(label, items) {
 this.label = label ;
 this.items = items 
this.isOpen = false
 this.toggle = function(){
   this.isOpen = !isOpen
 }
 this.render = function(){
   this.items.forEach(item =>)
 }
}

// Example Usage:
const dropdown = new Dropdown("File", ["New", { label: "Open", items: ["Recent", "Browse"] }]);
dropdown.toggle();
dropdown.render();
// Output:
// File (Open)
// - New
// - Open
//   - Recent
//   - Browse

  /**
function Dropdown(label, items) {
  this.label = label;
  this.items = items;
  this.isOpen = false;

  this.toggle = function () {
    this.isOpen = !this.isOpen;
  };

  this.render = function () {
    console.log(`${this.label} (${this.isOpen ? "Open" : "Closed"})`);;
    if (this.isOpen) {
      this.items.forEach(item => {
        if (typeof item === "string") {
          console.log(`- ${item}`);
        } else {
          console.log(`- ${item.label}`);
          if (item.items) {
            item.items.forEach(subItem => console.log(`  - ${subItem}`));
          }
        }
      });
    }
  };
}

// Example Usage:
const dropdown = new Dropdown("File", ["New", { label: "Open", items: ["Recent", "Browse"] }]);
dropdown.toggle();
dropdown.render();
   */