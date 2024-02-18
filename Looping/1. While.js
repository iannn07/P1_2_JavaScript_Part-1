// While Looping
let a = 5;
let total = 0;

while (a < 10) {
    total += a;
    console.log(total);
    a++;
}

console.log(total);
console.log(a);

console.log("\n");

// We can implement an array in while too
let arr = [1, 2, 3, 4, 5];
let i = 0;
let length = arr.length;
while (i < length) {
    arr.push(i);
    i++;
}

console.log(arr)