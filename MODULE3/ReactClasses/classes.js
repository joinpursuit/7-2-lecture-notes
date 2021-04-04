class Animal {
    //the constructor assigns values to the class properties
    //this refers to the outer most scopped code
    constructor(nameBeingPassed, animanlAge) {
        this.name = nameBeingPassed;
        this.age = animanlAge
    }

    speak(words){
        return `${this.name} says ${words}`
    }

}

let game = new snowman()
let animal = new Animal("Delancey", 1);
let animal2 = new Animal("Robert", 12);
console.log(animal.speak("Hello"))
// console.log(animal.name + ' ' + animal.age)
// console.log(animal2.name + ' ' + animal2.age)
console.log(animal)