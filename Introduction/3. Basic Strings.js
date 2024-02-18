// Basic strings data type manipulation
console.log("Basic strings data type manipulation");

let a = "Hello";
let b = "World";

let c = [
  { Manipulation: "Plus Operator", Result: a + " " + b },
  { Manipulation: "Concatenation", Result: a.concat(b) },
  { Manipulation: "Template Literal", Result: `${a} ${b}` },
  { Manipulation: "Slice", Result: a.slice(1) },
];

console.log(c, "\n")
console.table(c);

console.log("\n");

// String length
let d = "Hello World";

console.log("String length\t: ", d.length);

// String search
console.log("String search\t: ", d.search("World"));

// console.log(d.search("World"));

// String replace
console.log("String replace\t: ", d.replace("World", "Kasbon"));

// String split
console.log("String split\t: ", d.split(" "));
