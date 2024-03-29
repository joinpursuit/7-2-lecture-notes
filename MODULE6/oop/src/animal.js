// NAIVE IMPLEMENTATION OF A PET PROFILE
let buttons = {
    name: "Buttons",
    type : "miniature horse",
    age: 10,
    greeting: "sniff sniff",
    walk: "clip clop, clip clop",
}

// WHY IS THE ABOVE NOT IDEAL?

// OBJECT-ORIENTED IMPLEMENTATION OF A ANIMAL CLASS

// const animal = new Animal()
class Animal {
    constructor(name, type, age, color, isFriendly = false) {
        this.name = name;
        this._type = type;
        this.age = typeof age != "number" ? 1 : age;
        this.color = (color || "black");
        this.isFriendly = isFriendly;
        // this.description = `This is a ${type}`
    }

    static description = "A member of the animal kingdom."
    //ADD METHODS TO ANIMAL CLASS
    walk() {
        console.log(this);
        console.log("clip, clop")
    }

    greet(otherBeing) {
        console.log(`Sniff sniff, ${otherBeing.name}, I like your ${otherBeing.color} fur.`);
    }

    ageUp() {
        this.age++
    }

    eat(food){
        console.log(`Mmmm... this ${food} is yummy.`)
    }

    play(anotherAnimal){
        console.log(`${this.name} is playing with ${anotherAnimal.name}`)
    }

    static sleep(){
        console.log("I'm tired.... zzzzzzzz")
    }
}

const cat = new Animal("Fluffykins", "cat", "two", "white");
console.log(cat)
console.log(Animal.description)
console.log(cat.description)
Animal.sleep("total nonsense")
// ADD MULTIPLE METHODS TO OUR CLASS AND PASS THEM ARGUEMENTS

cat.eat("salmon")

// CREATE PROPERTIES ON OUR CLASSES INSIDE THE CONSTRUCTOR
// const cat = new Animal("Fluffykins", "cat", "two", "white");
console.log(cat._type)
// ^^ the underscore just denotes this value should not be reassigned
console.log(cat.name)
console.log(cat.age)
console.log(cat.color)
console.log(cat.isFriendly)

// CUSTOMIZE EACH INSTANCE (PROPERTIES AND METHODS) OF OUR CLASS

const dog = new Animal("Clover", "dog", 17, "brown", true)
console.log(dog)
// ADD DEFAULT VALUES TO OUR INSTANCES (IN CONSTRUCTOR)

// MODIFY OUR METHOODS SO THAT OUR OBJECTS CAN INTERACT WITH OTHER OBJECTS

cat.play(dog);
dog.play(cat);
// "Fluffykins is playing with Clover"
// "Clover is playing with Fluffykins"

//WHY IS THIS BETTER?

// CONSOLE.LOG NEW INSTANCES OF OUR CLASS

// const fluffy = new Animal("Fluffy", "miniature horse", 4);
// console.log(fluffy)
// console.log(fluffy.color)
// console.log(fluffy.type)
// fluffy.walk()
// fluffy.greet("Fido")
// console.log(fluffy.age) // before age up
// fluffy.ageUp()
// fluffy.ageUp()
// fluffy.ageUp()
// console.log(fluffy.age) // after age up
// const fido = new Animal("Fido", "dog", 12, "white", false)
// console.log(fido)
// fluffy.greet(fido)
// fido.greet(fluffy)

class StringExtra {
    static reverse(str) {
      return str.split("").reverse().join("");
    }
    static description =
      "I have some extra methods for doing things with strings";
}


console.log(StringExtra.reverse("I palindrome I"));

console.log(StringExtra.description);

 


// console.log(fido.age)


// INVOKE INSTANCE METHODS ON OUR NEW INSTANCES OF THE ANIMAL CLASS

// INITIALIZE NEW INSTANCES OF OUR NOW CUSTOMIZABLE CLASS PASSING IT PARAMETERS



export default Animal;