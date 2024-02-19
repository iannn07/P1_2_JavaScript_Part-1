// Declarative Function
// Old Way
const my_hamster = {
    Name: "Kasbon",
    Leg: 4,
    Set: 2,
    CageSet: function(newSet){
        "use strict";
        this.Set = newSet;
    }
};

my_hamster.CageSet(3);
console.table(my_hamster);

// New Way
const new_my_hamster = {
    Name: "Kasbon",
    Leg: 4,
    Set: 2,
    CageSet(newSet){
        "use strict";
        this.Set = newSet;
    }
};

new_my_hamster.CageSet(3);
console.table(new_my_hamster);