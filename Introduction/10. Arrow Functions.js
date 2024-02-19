// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 10));

// The code above is just similar to
const add_1 = function (a, b) {
  return a + b;
};
console.log(add_1(10, 10));

// Another example
const concatenation = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenation([1, 2, 3, 4], [5, 6, 7, 8]));

// Or
const concatenation_1 = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatenation_1([1, 2, 3, 4], [5, 6, 7, 8]));

// Additional
let arr = [1, 2, 3, 4, 5];
const two_different_arrays = (arr1) => {
  arr1.push(6);
  console.log("Array push\t\t\t: ", arr1);
  arr1.pop();
  console.log("Array pop\t\t\t\t: ", arr1);
};

two_different_arrays(arr)