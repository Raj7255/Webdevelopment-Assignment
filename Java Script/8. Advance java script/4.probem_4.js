// Base class Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Method draw (to be overridden by subclasses)
    draw() {
        console.log(`Drawing a generic shape in ${this.color} color.`);
    }
}

// Subclass Circle
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // Override draw method for Circle
    draw() {
        console.log(`Drawing a circle with radius ${this.radius} in ${this.color} color.`);
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Override draw method for Rectangle
    draw() {
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height} in ${this.color} color.`);
    }
}

// Demonstrate polymorphism using instances of Shape, Circle, and Rectangle
const shape = new Shape('red');
const circle = new Circle('blue', 10);
const rectangle = new Rectangle('green', 20, 30);

// Calling draw method on each instance
shape.draw();       // Output: Drawing a generic shape in red color.
circle.draw();      // Output: Drawing a circle with radius 10 in blue color.
rectangle.draw();   // Output: Drawing a rectangle with width 20 and height 30 in green color.


