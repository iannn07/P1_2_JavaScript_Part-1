// Basic ternary condition
function IsItEqual(a, b) {
  // condition ? true : false
  return a == b ? true : false;
}

console.log(IsItEqual(5, 5));

console.log("\n");

// Nested conditional ternary
function NegativeOrPositive(x) {
  return x < 0 ? "Negative" : x > 0 ? "Positive" : "Zero";
}

console.log(NegativeOrPositive(0));

// The function above is similar as follows
function IfStatementNegativeOrPositive(y) {
  if (y < 0) {
    return "Negative";
  } else if (y > 0) {
    return "Positive";
  } else {
    return "Zero";
  }
}

console.log(IfStatementNegativeOrPositive(1));
