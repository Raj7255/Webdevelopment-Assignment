function calculateTax() {
    // Tax rates based on income ranges
    const taxRates = [
        { range: 10000, rate: 0.1 },
        { range: 30000, rate: 0.15 },
        { range: 60000, rate: 0.2 },
        { range: Infinity, rate: 0.25 }
    ];

    // Return the function that calculates tax based on income
    return function(income) {
        let tax = 0;

        for (const { range, rate } of taxRates) {
            if (income <= range) {
                tax += income * rate;
                break;
            } else {
                tax += range * rate;
                income -= range;
            }
        }

        return tax;
    };
}

// Example usage
const calculateTaxFunction = calculateTax();

// Test the function with various incomes
const income1 = 8000;
const income2 = 25000;
const income3 = 50000;
const income4 = 75000;

console.log(`Tax for income $${income1}: $${calculateTaxFunction(income1)}`);
console.log(`Tax for income $${income2}: $${calculateTaxFunction(income2)}`);
console.log(`Tax for income $${income3}: $${calculateTaxFunction(income3)}`);
console.log(`Tax for income $${income4}: $${calculateTaxFunction(income4)}`);
