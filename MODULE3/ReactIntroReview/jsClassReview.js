class Animal {
    constructor(name){
        this.name = name;
        this.age = 0;  
    }

    sleep() {
        return "Quiet the animal is asleep"
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color; 
    }

    sleep() {
        return super.sleep() + " the animal is a cat"
    }

    static meow() {
        return "Meow meow meow"
    }
}

// const animal = new Animal("Peter");
// const cat = new Cat("Noboru", "Brown")

// console.log(animal)
// console.log(Cat.meow())
// ES5 Constuctor
// function Animal(name) {
//     console.log(this)
//     this.name = name; 
//     this.age = 0; 
// }

// // // ES5 to add methods
// Animal.prototype.sleep = function() {
//     // console.log(this)
//     return "Quiet the animal is asleep"
// }

// function adder(num1, num2) {
//     console.log(this)
//     return num1 + num2
// }

//3 ways of function invocation: function style, method style, and constructor style 

// adder();





//  Write a person class. 
// It should take in a name, and an age.
// Give the person a method called intro, that returns a string
// showing the persons name and age. 

class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }

    intro(favoriteNumber) {
        return `Hello my name is ${this.name} and I am ${this.age} years old and my favorite number is ${favoriteNumber}`
    }
}

class SuperHero extends Person {
    constructor(name, age, superpower) {
        super(name, age);
        this.superpower = superpower
    }

    fight() {
        return `${this.name} is destroying their opponent with ${this.superpower}`
    }
}

const superHero = new SuperHero("G", 2000, "Time")
console.log(superHero.fight())

// Now create a superhero class that extends the person class . 
// Add a superpower property 
// Give them a fight method that uses their super power in a sentence. 

// const person = new Person("Peter", 50);
// console.log(person)
// console.log(person.intro(100))