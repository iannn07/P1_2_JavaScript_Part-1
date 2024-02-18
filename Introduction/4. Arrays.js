// Basic arrays data type manipulation
console.log("Basic arrays data type manipulation");

// This is called a single dimensional array
let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "d", "e"];

// This is called an objects array
let objects = [
  { a_Index_Value: a[0] },
  { a_Index_Value: a[1] },
  { a_Index_Value: a[2] },
  { a_Index_Value: a[3] },
  { a_Index_Value: a[4] },
];

console.table(objects);

// Array length
console.log("Array length\t\t: ", a.length);

// Array search
console.log("Array search\t\t: ", a[3]);

// Array replace (Splice)
a.splice(2, 1, "Kasbon")
console.log("Array replace\t\t: ", a);

// Array concatenation
console.log("Array concatenation\t: ", a.concat(b));

// Array join
console.log("Array join\t\t\t: ", a.join("-"));

// INSERTION
// Array push
a.push(6)
console.log("Array push\t\t\t: ", a);

// Array unshift
a.unshift(0)
console.log("Array unshift\t\t: ", a);

// DELETION
// Array pop
a.pop()
console.log("Array pop\t\t\t: ", a);

// Array shift
a.shift()
console.log("Array shift\t\t\t: ", a);

console.log("\n");

// Slicing
let c = [1, 2, 3, 4, 5];

console.log("Slicing");

console.log("Slicing\t\t: ", c.slice(1, 3));

// Manipulating Values in an Array
let d = ["John Doe", "Sarah Michael", "Jaden Smith"];

console.log("Manipulating Values in an Array");

let manipulated_d = d.map(names => names.split(" "));

console.log("Manipulated Value\t: ", manipulated_d);