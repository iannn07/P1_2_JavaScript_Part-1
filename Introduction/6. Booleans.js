// Basic Boolean
let a = 5;
let b = 10;

let c = [
    { Notation: "a == b", Boolean: a == b },
    { Notation: "a != b", Boolean: a != b },
    { Notation: "a >  b", Boolean: a > b },
    { Notation: "a <  b", Boolean: a < b },
    { Notation: "a >= b", Boolean: a >= b },
    { Notation: "a <= b", Boolean: a <= b },
];

console.table(c);

// Boolean & If Statement
console.log("Boolean & If Statement");

function IsItEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("IsItEven (05)\t: ", IsItEven(a));
console.log("IsItEven (10)\t: ", IsItEven(b));

console.log("\n");

// Boolean & Else If Statement
console.log("Boolean & Else If Statement");

function GreaterThanFive_LessThanTen_One(num) {
    if ((num) => 5 && num <= 10) {
        return true;
    } else if (num == 1) {
        return true;
    } else {
        return false;
    }
}

console.log(
    "GreaterThanFive_LessThanTen_One (02)\t: ",
    GreaterThanFive_LessThanTen_One(2)
);
console.log(
    "GreaterThanFive_LessThanTen_One (05)\t: ",
    GreaterThanFive_LessThanTen_One(a)
);
console.log(
    "GreaterThanFive_LessThanTen_One (10)\t: ",
    GreaterThanFive_LessThanTen_One(b)
);
console.log(
    "GreaterThanFive_LessThanTen_One (01)\t: ",
    GreaterThanFive_LessThanTen_One(1)
);
