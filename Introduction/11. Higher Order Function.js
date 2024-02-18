// .map Method Example
let arr = [1, 2, 3, 4, 5];
let manipulated_arr = arr.map(dollar => "$" + dollar);
console.log("Original Array\t\t:", arr);
console.log("Manipulated Array\t:", manipulated_arr)

console.log("\n");

// .filter Method Example
let num = [10, 11.3, 3.14, 2.719, 2, -10];
let filtered_num = num.filter(integer => Number.isInteger(integer));
console.log("Original Array\t\t:", num);
console.log("Filtered Array\t\t:", filtered_num)

// Default Parameter Example
const DefaultParam = (x, y = 1) => x + y;
console.log("Default Parameter\t:", DefaultParam(5, 10));
console.log("Default Parameter\t:", DefaultParam(5));