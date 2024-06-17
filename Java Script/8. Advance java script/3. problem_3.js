// Calculator object constructor
function Calculator() {
    this.result = 0; // Initialize result to 0
}

// Method to add numbers
Calculator.prototype.add = function(num) {
    this.result += num;
    return this; // Return the calculator object for chaining
};

// Method to subtract numbers
Calculator.prototype.subtract = function(num) {
    this.result -= num;
    return this; // Return the calculator object for chaining
};

// Method to multiply numbers
Calculator.prototype.multiply = function(num) {
    this.result *= num;
    return this; // Return the calculator object for chaining
};

// Method to divide numbers
Calculator.prototype.divide = function(num) {
    if (num === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    this.result /= num;
    return this; // Return the calculator object for chaining
};

// Example usage:
const calc = new Calculator();

// Method chaining example
calc.add(5).multiply(2).subtract(10).divide(2);

// Get the final result
console.log("Result:", calc.result); // Output: Result: 5
