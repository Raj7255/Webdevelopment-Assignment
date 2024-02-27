const num1 = 1;
const num2 = 20;

console.log(`Output: ${generateNumbersInRange(num1, num2)}`);

function generateNumbersInRange(start, end) {
  const result = [];

  for (let i = start + 1; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// const num1 = 10;
// const num2 = 25;

// console.log(`Output: ${generateNumbersInRange(num1, num2)}`);

// function generateNumbersInRange(start, end) {
//   const result = [];

//   for (let i = start + 1; i <= end; i++) {
//     result.push(i);
//   }

//   return result;
// }
