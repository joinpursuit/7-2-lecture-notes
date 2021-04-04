class Animal {
  //the constructor assigns values to the class properties
  //this refers to the outer most scopped code
  constructor(nameBeingPassed, animanlAge) {
    this.name = nameBeingPassed;
    this.age = animanlAge;
  }

  speak(words) {
    return `${this.name} says ${words}`;
  }
}

let animal = new Animal("Delancey", 1);
let animal2 = new Animal("Robert", 12);
// console.log(animal.speak("Hello"))
// console.log(animal.name + ' ' + animal.age)
// console.log(animal2.name + ' ' + animal2.age)
// console.log(animal)

//Extending Classes
//extend keyword allows to extend a class to an existing class.
// class MiniVan extends Car
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); //this calls the extend class constructor
    this.breed = breed;
  }
}

let dog = new Dog("Scobby", 20, "Great Dane");

// console.log(dog.speak("Woof"))

class User {
  constructor(name) {
    this.name = name;
    this.hasAdminStatus = false;
  }
  deleteAllDatabases() {
    if (this.hasAdminStatus) {
      console.log("Deleted!");
    } else {
      console.log("You don't have admin status");
    }
  }
}

class SuperUser extends User {
  constructor(name) {
    super(name); // User.constructor(name)
    this.hasAdminStatus = true
  }
}


class SuperUser extends User {
    constructor(name)
  }
  

const sup = new SuperUser("Lex")
const user = new User("Sparky")
// sup.deleteAllDatabases()
console.log(sup)
console.log(user)


function constructor(){

}

constructor();