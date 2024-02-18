// The Differences between Var, Let, and Const
function CodeScope() {
  "use strict";
  var a = 5;
  let b = 10;
  const c = 15;
  console.log("Initial Value\t: ", a, b, c);

  if (b == 10) {
    var a = 10;
    let b = 15;
    const c = 20;
    console.log("Block Scope\t\t: ", a, b, c);
  }
  console.log("Function Scope: ", a, b, c);
}

CodeScope();

/* 
As the code above, it will output:
Initial Value   : 5 10 15
Block Scope     : 10 15 20 
Function Scope  : 10 10 15

This means that var variable can always be changed everywhere. While let and const can only be changed within the specific block scope {}.
*/
