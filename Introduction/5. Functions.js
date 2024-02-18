// Basic Function Concepts
function PrintHelloWorld() {
  return "Hello World";
}

console.log("Basic Function Concepts\t: ", PrintHelloWorld());

// Passing an argument to parameter in function
function HamsterName(name) {
  return "Hello " + name;
}

console.log("Passing an argument\t\t: ", HamsterName("Kasbon"));

console.log("\n");

// Global variable
console.log("Global variable vs local variable");
let global_variable = 10;

function GlobalVariable() {
  let output = "";
  output = "global_variable\t: " + "Number " + global_variable;
  return output;
}

console.log(GlobalVariable(global_variable));

function LocalVariable(param) {
  let local_variable = 20;
  return "local_variable\t: " + (local_variable + param);
}

console.log(LocalVariable(10));
