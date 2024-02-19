// Spread Operator
const arr1 = ["Kasbon", "Fat Kasbon", "Very Fat Kasbon"];

let arr2;

let spread = function (){
    arr2 = [...arr1, "Very Very Fat Kasbon"];
    arr1[0] = "Not Kasbon";
    return arr2;
}

console.log(spread());
console.log(spread());