// MDN Array vs Math common methods
// static  
// instance
// OOP quick review

class Animal {
    static createDog() {
        // console.log('Create Dog', this)
        return new Animal('dog');
    }
    // static methods are for when we dont need a reference to `this`

    constructor(species) {
        this.species = species;
        this.stomach = [];
    }

    poop() {
        this.stomach = [];
    }

    eat(food) {
        this.stomach.push(food);
        debugger
    }

    static createCat(){
        return new Animal('cat')
    }
} 

window.dog = Animal.createDog();
window.cat = Animal.createCat();
window.fish = new Animal('fish');

// find dog and fish swimming in the dev tools
// make them eat stuff
// check their properties
// check the prototype 

// whats `this` inside of static/prototype method? 
// when do we want a static method vs an instance/prototype method?

// add properties to Array prototype 
// monkeypatching the Array class 


Animal.prototype.MYVARIABLE = "WHATEVER I WANT"

// console.log(fish)

////////////////////////////////////////
//////////    PRACTICE    //////////////
////////////////////////////////////////

// I want to be able to do the following:
// [].myForEach(el => console.log(el));
// [].myMap(el => el + 1);
// [].myFilter(el => !!el);
// [].myEvery(el => el > 0);

Array.prototype.myForEach = function (callbackFn) {

    for(let i = 0; i < this.length; i++){
        callbackFn(this[i])
    }
}
// in fat arrow functions `this` is the scope above the function not within
// forEach calls a function on each element of your array and returns undefined

let arr1 = [1, 2, 3]
let logger = el => console.log(el)
arr1.myForEach(logger)

Array.prototype.myMap = function(callbackFn){
    let array = [];

    for(let i = 0; i < this.length; i++){
        array.push(callbackFn(this[i]))
    }

    return array
}

let mapResult = arr1.myMap(el => el+1)
// console.log(mapResult)

Array.prototype.myFilter = function(callbackFn){
    let filteredArr = [];

    for(let el of this){
        console.log(el)
        if(callbackFn(el)){
            filteredArr.push(el)
        }
    }
    return filteredArr;
}

let filteredResult = arr1.myFilter(el => el % 2 === 0);
// console.log(filteredResult);

Array.prototype.myEvery = function(callbackFn){

    for(let el of this){
        if (!callbackFn(el)) return false
    }

    return true
}

let everyResult = arr1.myEvery(el => el % 2 === 0);
console.log(everyResult)
