// #1.Sort the array and find the min and max age

const { log } = require("console");

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const sorting_array =ages.sort((a,b)=>a-b);
const minimum_age=ages[0];
const maximum_age=ages[ages.length-1];


console.log(sorting_array);
console.log(minimum_age);
console.log(maximum_age);





// #2.Find the median age(one midle item or two mi""le items divide by two)

ages.sort((a, b) => a - b);
// Find the median age
const middleIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  // If the array has an even length, find the average of the two middle values
  const median = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
  console.log("Median Age:", median);
} else {
  // If the array has an odd length, the middle value is the median
  console.log("Median Age:", ages[middleIndex]);
}





// #3. Find the average age(all items divided by number of items)

const avg= ages.reduce((sum,current)=>sum+current)/ages.length;
console.log("Average age=",avg);





// #4.Find the range of the ages(max minus min)

const range=maximum_age - minimum_age
console.log(range);




//#5 Compare the value of (min - average) and (max - average), use abs() method

const min_avg = Math.abs(minimum_age - avg);
const max_avg = Math.abs(maximum_age -avg);

const compare = Math.abs(min_avg - max_avg);

console.log(min_avg);
console.log(max_avg);
console.log(compare);

