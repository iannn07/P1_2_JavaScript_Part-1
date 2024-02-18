// Basic Objects Operation
let my_hamster = {
    Name: "Kasbon",
    Age: "1 Months 3 Weeks",
    Color: "Brown-White",
    Gender: "Male",
}

// To Print it like a JSON
console.log(my_hamster);

// To Print it using table
console.table(my_hamster);

// To access specific property
console.log("My Hamster Name\t: ", my_hamster.Name);
console.log("My Hamster Color: ", my_hamster["Color"]);

// To update the properties
my_hamster.Name = "Fat Kasbon";
console.log("My Hamster Name\t: ", my_hamster.Name);

// To add a new properties
my_hamster.Favourite = "Coconut";
console.table(my_hamster);

// To delete a properties
delete my_hamster.Favourite;
console.table(my_hamster);

// Rather than using switch to print the details of an object, we can use object dictionary
function HamsterDetails(detail) {
    let your_hamster_detail = my_hamster[detail];
    return your_hamster_detail;
}

console.log("My Hamster Details: ", HamsterDetails("Name"));