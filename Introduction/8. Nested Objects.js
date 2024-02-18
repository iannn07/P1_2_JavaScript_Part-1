// Nested Objects Example
let kasbon = {
  Name: "Kasbon",
  Age: "1 Months 3 Weeks",
  Color: "Brown-White",
  Gender: "Male",
  Favourite_Food: {
    Seed: "Sunflower Seed",
    Insects: "Mealworm",
  },
};

console.log(kasbon);
console.table(kasbon);
console.table(kasbon.Favourite_Food);

// Array of Objects
let fat_kasbon = [
  { Property: "Name", Value: "Fat Kasbon" },
  { Property: "Age", Value: "1 Months 3 Weeks" },
  { Property: "Color", Value: "Brown-White" },
  { Property: "Gender", Value: "Male" },
  {
    Property: "Favourite_Food",
    Value: {
      Seed: "Sunflower Seed",
      Insects: "Mealworm",
    },
  },
];

console.table(fat_kasbon);

// Nested Array of Objects
let hamsters = [
  {
    Name: "Kasbon",
    Age: "1 Months 3 Weeks",
    Color: "Brown-White",
    Gender: "Male",
    Favourite_Food: ["Sunflower Seed", "Mealworm"],
  },
  {
    Name: "Very Fat Kasbon",
    Age: "1 Months 3 Weeks",
    Color: "Brown-White",
    Gender: "Male",
    Favourite_Food: ["Sunflower Seed", "Mealworm"],
  },
];

console.log("Very Fat Kasbon Data: \n", hamsters[1]);
console.log("Very Fat Kasbon Favourite Food: ", hamsters[1].Favourite_Food);
console.log("Very Fat Kasbon Seeds: ", hamsters[1].Favourite_Food[0]);
