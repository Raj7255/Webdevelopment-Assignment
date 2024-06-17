// Person constructor from the previous example
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method to greet the person
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor inheriting from Person
function Employee(name, age, designation) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);
    
    // Additional property for Employee
    this.designation = designation;
}

// Inherit Person prototype methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method to get employee details
Employee.prototype.getDetails = function() {
    console.log(`Employee Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Designation: ${this.designation}`);
};

// Example usage:
// Create a new Employee object
const employee1 = new Employee('John Doe', 35, 'Software Engineer');

// Call inherited method from Person
employee1.sayHello(); // Output: Hello, my name is John Doe and I am 35 years old.

// Call method specific to Employee
employee1.getDetails();
// Output:
// Employee Name: John Doe
// Age: 35
// Designation: Software Engineer
