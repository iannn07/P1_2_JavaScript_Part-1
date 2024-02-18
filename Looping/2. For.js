// Basic for syntax
console.log("Basic for syntax");

let count = 0;
let i = 0;
for(i = 0; i < 10; i++){
    count = i;
}
console.log(count);
console.log(i);

console.log("\n");

// For & Array
console.log("For & Array");

let arr = [1, 2, 3, 4, 5];
let length = arr.length;
for(let i = 0; i < length; i++){
    arr.push(i);
}
console.log(arr);

// Reverse Array
console.log("Reverse Array");

let arr2 = [1, 2, 3, 4, 5];
let length2 = arr2.length;
for(let i = length2; i > 0; i--){
    arr2.push(i);
}
console.log(arr2)

// Count Backwards
console.log("Count Backwards");

let arr3 = [];
for(let i = 10; i > 0; i -= 2 ){
    arr3.push(i);
}
console.log(arr3);

// Count Forward
console.log("Count Forward");

let arr4 = [];
for(let i = 0; i < 10; i += 2 ){
    arr4.push(i);
}
console.log(arr4);

// Sum
let arr5 = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < arr5.length; i++){
    sum += arr5[i];
}
console.log("Sum\t: ", sum);