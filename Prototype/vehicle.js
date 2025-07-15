// Vehicle class (Base class)
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Vehicle.prototype.displayInfo = function() {
  console.log(`Model : ${this.model}`)
   console.log(`Make : ${this.make}`)
    console.log(`Year : ${this.year}`)
};
// Car class (inherits from Vehicle)
function Car(make, model, year, doors) {
 this.make = make;
  this.model = model;
  this.year = year;
  this.doors = doors;
}
Car.prototype = Object.create(Vehicle.prototype); // Inherit methods
Car.prototype.constructor = Car;
Car.prototype.displayInfo = function() {
  console.log(`Model : ${this.model}`)
   console.log(`Make : ${this.make}`)
    console.log(`Year : ${this.year}`)
    console.log(`Doors :${this.doors}`)
};

// Truck class (inherits from Vehicle)
function Truck(make, model, year, payloadCapacity) {
 this.make = make;
 this.model = model;
 this.year = year;
 this.payloadCapacity = payloadCapacity
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.displayInfo = function() {
   console.log(`Model : ${this.model}`)
   console.log(`Make : ${this.make}`)
    console.log(`Year : ${this.year}`)
    console.log(`Payload Capacity :${this.payloadCapacity}`)

};
// Usage
let car = new Car("Toyota", "Corolla", 2020, 4);
let truck = new Truck("Ford", "F-150", 2021, 3);
car.displayInfo(); 
truck.displayInfo()

//Vehicle.call(this,make,model,year)