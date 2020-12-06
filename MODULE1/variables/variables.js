"use strict" // cannot accidentally declare a global variable 

// Creating a variable consists of a few parts. 
// 1. Declaration - const, let, var 
// 2. variable name describe what they are (think nouns)
// 3. assignment of value = (assignment operator) - on right give value 

// Forward slash is considered an escape key. 

// If you forget to declare a variable it will automatically become global
// first_name - snakecase - common with languages like Ruby 
// in JS we use camelCase - starts lowercase, each additional word capital 

// let firstName = "Corey";
// let lastName = "Ladovsky";
// console.log(lastName)

// lastName = "Tanasootr"

// console.log(lastName)

// const city = "New York City";

// city = "Chicago";

// console.log(city);

// let animal; // declared but not assigned are undefined 
// - will not work for constants

// console.log(undefined);

// let animal = null; 
// console.log(animal)

// 0, -0, "", false, null, NaN, undefined - falsy values
// null is absence of any value 

// let age = 100; 
// console.log(age)

// age = age + 1;
// age += 1 //  ^ is synonymous - called syntactic sugar 

// console.log(age)

let num = 8; 
// num /= 2 /// num = num / 2   num += 2 // num = num + 2
// console.log(num / 2)
num++ // num += 1 
console.log(num)