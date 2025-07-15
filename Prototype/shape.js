// Base Shape Class
function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.displayInfo = function() {
 
    console.log(`Shape : ${this.x} ,${this.y}`)
};

// Circle Class (inherits from Shape)
function Circle(x, y, radius) {
 Shape.call(this,x,y)
 this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Circle.prototype.constructor = Circle;

// Override displayInfo for Circle
Circle.prototype.displayInfo = function() {
  console.log(`Shape : ${this.x} ,${this.y},${this.radius}`)
};

// Rectangle Class (inherits from Shape)
function Rectangle(x, y, width, height) {
 Shape.call(this,x,y)
 this.width = width;
 this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Rectangle.prototype.constructor = Rectangle;

// Override displayInfo for Rectangle
Rectangle.prototype.displayInfo = function() {
  console.log(`Shape : ${this.x} ,${this.y},${this.width},${this.height}`)
};

// Usage

// Creating a Circle object
let circle = new Circle(10, 20, 5);
circle.displayInfo(); 
// Expected Output: "Circle at position (10, 20) with radius 5"

// Creating a Rectangle object
let rectangle = new Rectangle(30, 40, 10, 20);
rectangle.displayInfo(); 
// Expected Output: "Rectangle at position (30, 40) with width 10 and height 20"
