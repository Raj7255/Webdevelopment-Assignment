 // Object constructor for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Method to greet the person
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Example usage:
// Create a new Person object
const person1 = new Person('Alice', 30);

// Call the sayHello method to greet the person
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.

// Another example
const person2 = new Person('Bob', 25);
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
