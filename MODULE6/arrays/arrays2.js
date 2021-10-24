// MDN Array vs Math common methods
// static  
// instance
// OOP quick review

class Animal {
    static createDog() {
        return new Animal('dog');
    }

    constructor(species) {
        this.species = species;
        this.stomach = [];
    }

    poop() {
        this.stomach = [];
    }

    eat(food) {
        this.stomach.push(food);
    }
} 

window.dog = Animal.createDog();
window.fish = new Animal('fish');

// find dog and fish swimming in the dev tools
// make them eat stuff
// check their properties
// check the prototype 

// whats `this` inside of static/prototype method? 
// when do we want a static method vs an instance/prototype method?

// add properties to Array prototype 
// monkeypatching the Array class 


////////////////////////////////////////
//////////    PRACTICE    //////////////
////////////////////////////////////////

// I want to be able to do the following:
// [].myForEach(el => console.log(el));
// [].myMap(el => el + 1);
// [].myFilter(el => !!el);
// [].myEvery(el => el > 0);