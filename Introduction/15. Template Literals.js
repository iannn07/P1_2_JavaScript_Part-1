// Template Literal

const my_hamster = {
  Name: "Kasbon",
  Age: "1 Months 3 Weeks",
  Color: "Brown-White",
  Gender: "Male",
};

let my_hamster_description = `${my_hamster.Name} is a Roborovski Hamster that is ${my_hamster.Age} old. His fur is ${my_hamster.Color} and his gender is ${my_hamster.Gender}.`;

console.log(my_hamster_description);

// Another Example of Template Literals
let kasbon = {
    Name: "Kasbon",
    Age: "1 Months 3 Weeks",
    Color: "Brown-White",
    Gender: "Male",
    Favourite_Food: ["Sunflower Seed", "Mealworm"],
};

function my_hamster_details_list(arr) {
  let my_hamster_arr = [];
  for (let i = 0; i < arr.length; i++) {
    my_hamster_arr.push(`<li class = "my_hamster_favourite_food">${arr[i]}</li>`);
  }
  return my_hamster_arr;
}

console.log(my_hamster_details_list(kasbon.Favourite_Food));
