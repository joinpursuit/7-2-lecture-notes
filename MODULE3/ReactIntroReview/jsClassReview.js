class Animal {
    constructor(name){
        this.name = name;
        this.age = 0;  
    }

    sleep() {
        return "Quiet the animal is asleep"
    }
}
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


// const animal = new Animal("Peter");

// console.log(animal)
// console.log(animal.sleep())


//  Write a person class. 
// It should take in a name, and an age.
// Give the person a method called intro, that returns a string
// showing the persons name and age. 