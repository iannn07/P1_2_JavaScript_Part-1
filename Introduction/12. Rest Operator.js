// Rest Operator

// Rather than create a function like this
function normal_sum(a, b, c) {
    return a + b + c;
}

console.log("Normal Function\t: ", normal_sum(1, 2, 3));

// or like this
let arrow_sum = (a, b, c) => a + b + c;

console.log("Arrow Function\t: ", arrow_sum(1, 2, 3));

// You can simplify and make it mor dynamic by using Rest Operator
function rest_sum (...args){
    return args.reduce((a, b) => a + b);
}

console.log("Rest Operator\t: ", rest_sum(1, 2));
console.log("Rest Operator\t: ", rest_sum(3, 4, 5));
console.log("Rest Operator\t: ", rest_sum(1, 1, 1, 1, 1));