// let fruits = ["apple", "orange"]
// console.log(fruits[1]) //=> give orange
// fruits[1] = "strawberry" // assign 1st index to have value of strawberry

// console.log(fruits)

// Objects don't have a length or size property

// Objects
// { key / property: value }
// all keys in objects are strings
// all values can be any form of data

// let fruits = {
//     0: "apple",
//     1: "orange"
// }

// console.log(fruits[1]) //=> give orange
// fruits[1] = "strawberry" // assign 1st index to have value of strawberry

// console.log(fruits)

// Think of objects as real life obejets
// Things have properties in real life and point to values

// let person = {
//   firstName: "Corey",
//   lastName: "Ladovsky",
//   age: 100,
//   weight: 200,
//   42: "Answer of Universe",
// //   favoriteAnimals: ["cats", "monkeys", "birds"]
// };

// console.log(person["height"]) // any key that doesn't have a value gives back undefined

// console.table(person)

let variableLastName = "lastName";

// console.log(person[variableLastName])

// person["firstName"] = "Flower" // would change first name to flower
// console.log(person)

// To set a new key value pair do it like so
// obj[key] = value

// Make an object and give it some key value pairings.
// console.log a value by keying into it.
// reset the value to be something else
// and then log that value again

// we've been doing bracket notation which is just like how we do arrays

// but objects also have dot notation.

let car = {
  model: "T",
  company: "Ford",
  year: 1921,
  "nick-name": "Free-Bird",
};

// console.log(car["company"]);
// console.log(car.company) // get value using dot notation

// car["year"] = 1908
// car.year = 1908; // set property using dot notation
// console.log(car["nick-name"])
// console.table(car);

// console.log({name: "corey" }=== {name: "corey"}); // => false because checks for address in memory not contents

// use a for...in loop to iterate
// for(const key in objectToInterate) {
// do this code
// }

// let person = {
//   firstName: "Corey",
//   lastName: "Ladovsky",
//   age: 100,
//   weight: 200,
// };

// for(const key in person) {
//     // console.log(key) // gives up key
//     // console.log(person[key]) // gives us value
// }

//write a function that takes in any object
// and sets all the values in the object to be "***"

const updateAllValuesInObject = (obj) => {
  for (const key in obj) {
    obj[key] = "***";
  }
  return obj;
};

// const person = {
//   firstName: "Corey",
//   lastName: "Ladovsky",
//   age: 200,
//   weight: 200,
// };

const updateCertainAttributes = (arrOfKeysAndValues) => {
  let obj = {};
  for (let i = 0; i < arrOfKeysAndValues.length; i++) {
    let attr = arrOfKeysAndValues[i]; // [key, newVal]
    obj[attr[0]] = attr[1];
  }
  return obj;
};
// console.log(updateCertainAttributes([["age", 100], ["weight", 300]]));

// console.log(updateAllValuesInObject(person))

// all keys in an object are UNIQUE!

// create counters that map keys to their occurrence.

//very common to see arrays of objects
let films = [
  {
    name: "Psycho",
    director: "Alfred Hitchcock",
    released: 1960,
  },
  {
    name: "Citizen Kane",
    director: "Orson Welles",
    released: 1941,
  },
  {
    name: "The Usual Suspects",
    director: "Bryan Singer",
    released: 1995,
  },
];

// console.log(films[0]["name"])

// for(let i = 0; i < films.length; i++) {
//     const film = films[i];
//     console.log(film.director)
// }

const closet = {
  winter: {
    hands: "gloves",
    head: "beanie",
  },
  summer: {
    hands: "rings",
    head: "baseball cap",
  },
};

//don't rely on order with objects, insertion order or otherwise

// what would i need to write to get back rings
// console.log(closet.summer.hands);
// console.log(closet["summer"]["hands"]);

// look up optional chaining in JS if you're looking for extra challenge. 

const person = {
  firstName: "Corey",
  lastName: "Ladovsky",
  age: 200,
  weight: 200,
};

// let arrOfKeys = [];

// for(const key in person) {
//     arrOfKeys.push(key);
// }

//we can use Object.keys(objYouWantKeys) to get an array of keys

let arrOfKeys = Object.keys(person)
// console.log(arrOfKeys);

let arrOfValues = Object.values(person); // this is a new array unrelated to the object 
// console.log(arrOfValues);
// arrOfValues[0] = "Farrah"
// console.log(arrOfValues)

// console.log(person)

// console.log(person["weight"])

const apple = {
    type: "Macintosh",
    color: "Green"
}

// console.log(apple["color"])
// apple["color"] = "Purple"
// apple.color = "Purple"

// apple["radius"] = 3

// apple["circumfrence"]

delete apple["color"] // delete obj[keyToDelete]

// console.log(apple)

let animalArray = ["cat", "dog", "bird", "cat", "cat", "dog"];
// {
    // cat: 3,
    // dog: 2, 
    // bird: 1,
// }

function occurrenceCounter(arr) {
    let counter = {};
    for(let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(counter[el] !== undefined) {
            counter[el] += 1; // counter[el] = counter[el] + 1
        } else {
            counter[el] = 1;
        }
    }
    return counter; 
}

console.log(occurrenceCounter(animalArray));


// object oriented programming 


// 0
// undefined
// NaN
// ""
// null
// false
