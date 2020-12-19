// Array is a collection of items
// Array is a type of data structure that's super common.

let nums = [7, 5, 6, 3];

let booleans = [true, true, false];
let multidimentionalArray = [
  [1, 2, 3],
  [4, 5, 6],
];
let objectArray = [{}, {}, {}];

let mixedDataArray = [1, 2, "cat", "blue"]; // BAD PRACTICE, KEEP UNIFORM DATA

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

// const letters = ["c", "a", "t"];
// let word = letters.join("$"); // join joins the array with the argument passed default to ","
// console.log(word.split("$")); // split on parts of strings to make array
// // console.log(letters);

const fruits = ["banana", "cherry", "apple"];

let fruitsString = fruits.join(" & ");
// let newFruitArray = fruitsString.split("&");
// console.log(fruitsString);

// write a function that removes an element from the end of the array and returns it.

// function lastElement(arr) {
//     return arr.pop();
// }

// console.log(lastElement([1, 2, 3, 4, 5]))

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1.push(4);
// console.log(arr1)
// console.log(arr2)

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

///slice allows us to slice (duplicate) parts of the array or all of the array
// let arr1 = [1, 2, 3];
// let arr2 = arr1.slice(0) // slice two arguments. 1st is starting index (inclusive)
// second optional arg is ending index (exclusive)
// arr2.push("CAT");
// console.log(arr1)
// console.log(arr2);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6]; // goal is [1, 2, 3, 4, 5, 6]
// let concatedArray = arr1.concat(arr2); // concat is non mutative .
// console.log(arr1);

// function isContained(arr, target) {
//     let length = arr.length;
//     return arr.includes(target);
// }

// let mtx = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(mtx[2][0])

// splice as cutting and or replacing 
// 1st arg is starting index (inclusive )
// 2nd arg is deletion count 
// 3rd + are optional will be added into the array. 

// let animals = ["cat", "dog", "bird", "snake"];
// animals[1] = "fish"
// animals.splice(1, 1)
// console.log(animals);


//write a function that finds the  middle element / elements if even. 
function middleElement(arr) {
    let midIdx = Math.floor(arr.length / 2);
    if(arr.length % 2 === 1) { // if odd 
        return arr[midIdx];
    } else {
        return [arr[midIdx - 1], arr[midIdx]];
    }
}
let animals = ["cat", "dog", "bird", "snake", "turtle", "whale"];
console.log(middleElement(animals))