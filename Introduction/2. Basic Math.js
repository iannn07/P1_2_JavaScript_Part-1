// Basic math operations
console.log("Basic math operations");

let a = 5;
let b = 10;

let basic_operation = [
    {"+": a + b},
    {"-": a - b},
    {"*": a * b},
    {"/": a / b},
    {"%": a % b},
    {"**": a ** b},
];

console.table(basic_operation);

console.log("\n");

// Increment and decrement
console.log("Increment and decrement");

let c = 5;
let inc_dec = [
    {"c++": c++},
    {"c  ": c},
    {"c--": c--},
    {"c  ": c},
];

console.table(inc_dec);

console.log("\n");

// Compound assignment
console.log("Compound assignment");

let d = 5;
let compound_assignment = [
    {"d += 5": d += 5},
    {"d -= 5": d -= 5},
    {"d *= 5": d *= 5},
    {"d /= 5": d /= 5},
    {"d **= 5": d **= 5},
    {"d %= 5": d %= 5},
];

console.table(compound_assignment);

console.log("\n");

// Ternary operator
console.log("Ternary operator");

let f = 5;
let ternary_operator = [
    {"5 < 10": f < 10},
    {"5 > 10": f > 10},
    {"5 <= 10": f <= 10},
    {"5 >= 10": f >= 10},
    {"5 == 10": f == 10},
    {"5 != 10": f != 10},
]

console.table(ternary_operator);

console.log("\n");

// Math functions
console.log("Math functions");

let math_functions = [
    {"Math.abs(-5)": Math.abs(-5)},
    {"Math.ceil(5.2)": Math.ceil(5.2)},
    {"Math.floor(5.2)": Math.floor(5.2)},
    {"Math.round(5.2)": Math.round(5.2)},
    {"Math.trunc(5.2)": Math.trunc(5.2)},
    {"Math.sqrt(5)": Math.sqrt(5)},
    {"Math.pow(5, 2)": Math.pow(5, 2)},
    {"Math.log(5)": Math.log(5)},
];

console.table(math_functions);

console.log("\n");

// Advanced math functions
console.log("Advanced math functions");

let advanced_math_functions = [
    {"Math.log10(5)": Math.log10(5)},
    {"Math.sin(5)": Math.sin(5)},
    {"Math.cos(5)": Math.cos(5)},
    {"Math.tan(5)": Math.tan(5)},
];

console.table(advanced_math_functions);

console.log("\n");

// Math constants
console.log("Math constants");

let math_constants = [
    {"Math.E": Math.E},
    {"Math.PI": Math.PI},
    {"Math.SQRT1_2": Math.SQRT1_2},
    {"Math.SQRT2": Math.SQRT2},
];

console.table(math_constants);