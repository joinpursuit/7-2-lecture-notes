// Array is a collection of items 
// Array is a type of data structure that's super common. 

let nums = [7, 5, 6, 3];

let booleans = [true, true, false];
let multidimentionalArray = [[1, 2, 3], [4, 5, 6]]
let objectArray = [{}, {}, {}]

let mixedDataArray = [1, 2, "cat", "blue"]// BAD PRACTICE, KEEP UNIFORM DATA




// const fruits = ["banana", "cherry", "apple"];

// console.log(fruits.length) // length is an array property.
// console.log(fruits[0]) // always gets the first element
// console.log(fruits[fruits.length - 1]); // always get last element
// Make your own array, that includes three of something. 

// indexing and keying into an array give a value (getter)
// setting something involves using the assignment operator. 


// fruits[0] = "pineapple"; // setting a value at a particular index. 
// fruits[10] = "orange";
// fruits[fruits.length - 1] = "Corey";
// const fruits = ["banana", "cherry", "apple"];
// fruits[1] = "pineapple"; // [bannana, pineapple, apple]
// let fruit = fruits.pop(); // apple  , [banana, pineapple]
// fruits.push("pear");  /// [bannana, pineapple, pear]
// fruits.push("strawberry"); // [bannana, pineapple, pear, strawberry]
// fruits[fruits.length - 1] = "banana"; //[bannana, pineapple, pear, bannana]
// console.log(fruits)
// let removedFruit = fruits.pop() // takes no argument -> pops off last element in the array
// fruits[fruits.length] = "pear" 
// fruits.push("pear")
// console.log(fruits)
// console.log(removedFruit)
// pop evaluates to the item removed from array 

// console.log(fruits.push("orange")) // add an element to the end of the array 
// push evaluates to the new length of the array. 


// unshift and shift 
// unshift adds to the front of the array 
// fruits.unshift("pear"); -> evaluates to new length of array 
// fruits.shift(); -> evaluates to item removed 
// const fruits = ["banana", "cherry", "apple"];
// fruits.unshift("pear"); //["pear", "banana", "cherry", "apple"]
// let fruit = fruits.pop(); // fruit -> apple  ["pear", "banana", "cherry"]
// fruits[2] = "apple"; //  ["pear", "banana", "apple" ]
// fruits.unshift(fruit); // ["apple", "pear", "banana", "apple" ]
// fruits.shift(); // ["pear", "banana", "apple" ]
// fruits.push(fruit); // ["pear", "banana", "apple", "apple" ]
// fruits[0] = fruits[1]; // ["banana", "banana", "apple", "apple"]
// console.log(fruits);

const letters = ["c", "a", "t"];
let word = letters.join("$"); // join joins the array with the argument passed default to ","
console.log(word.split("$")); // split on parts of strings to make array 
// console.log(letters);
