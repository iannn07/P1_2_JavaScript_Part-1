// Simple Fields

// To Create an object from a function, we can use the following code
const my_hamster = (name, age, color, race) => {
  return {
    Name: name,
    Age: age,
    Color: color,
    Race: race,
  };
};

console.log(
  my_hamster("Kasbon", "1 Months 3 Weeks", "Brown-White", "Roborovski")
);

// However, you can simplify this by using simple fields
const simple_my_hamster = (name, age, color, race) => ({
  Name: name,
  Age: age,
  Color: color,
  Race: race,
});

console.log(simple_my_hamster("Kasbon", "1 Months 3 Weeks", "Brown-White", "Roborovski"))

// See? It's basically the same, but you don't need to write the return block