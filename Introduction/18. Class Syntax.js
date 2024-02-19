// To create an object, usually we use constructor right? Which as follows
let hamster = function (hamster_name){
    this.hamster_name = hamster_name
}

let new_hamster = new hamster("Kasbon");

console.log(new_hamster.hamster_name);

// However, we can convert it using class syntax
class new_hamster_class {
    constructor(hamster_name) {
        this.hamster_name = hamster_name
    }
}

let new_hamster_for_class = new new_hamster_class("Fat Kasbon");

console.log(new_hamster_for_class.hamster_name)