// Functions allow us to write reusable code blocks.
// We declare our function with keyword function.
// Then name our function. camelCase what it does
// parentheses, then open and close curly brackets.
// functions evaluate to whatever they return.
// console.log(greeting("Peter")) // ES5 functions hoist themselves to top of file 
// function greeting(name) {
//       let str = "Hello ";
//       return str + name;
//     }
    
    // const greeting = function(name) {
        //     return "Hello " + name
        // }
        // console.log(actor)
        // const actor = "Tom Cruise"
        
// const greeting = (name) => { // ES6+ can use after definition only 
//     return "Hello " + name;
// }
// const greeting = name => { // If only 1 parameter, no parenthesis needed. 
//     return "Hello " + name;
// }
// const greeting = name => ( // If I'm returning everything in my function, I can use parenthesis
//      "Hello " + name        // instead of curly brackets and keyword return. 
// )
const greeting = () => "Hello World"    // implicit returns return everything in function without explicit return keyword     


console.log(greeting())
// console.log(greeting)

// console.log(greeting("Marsha"));
// console.log(greeting("Flower"));
// console.log(greeting());

// function sumOfTwoNumbers(num1, num2) {
//     let animal = "cat"

//     function insideFunction() {
//         console.log(animal)
//     }
//     insideFunction()
//     return num1 + num2;
// }

// console.log(animal)
// console.log(sumOfTwoNumbers(6, 4))

function sayGoodbye(name = "Maddy") {
    return "Goodbye " + name
}


// console.log(sayGoodbye())
// console.log(sayGoodbye("Durdona"))

// Write a function called subtract. It should take in two arguments and 
// return the difference. If only one argument is passed in, it should return that 
// argument (hint default value)

function subtract(num1, num2 = 0) {
    return num1 - num2; 
}
// console.log(subtract(10, 3))
// console.log(subtract(6))

// Write a function called isEven that takes in a number, 
// and returns whether the number is even. 
function isEven(num) {
    return num % 2 === 0
}

// console.log(isEven(5))
// console.log(isEven(6))

//  For this mornings warm up, write a function that takes in three numbers and returns the average.

function average(num1, num2, num3) {
    let sumOfArgument = num1 + num2 + num3; 
    let numberOfArguments = 3; 
    return sumOfArgument / numberOfArguments
}   

// console.log(average(5, 10, 15))

function lastDigit(num = 100) {
    return num % 10;
}

// let bigNum = 105

// console.log(lastDigit(bigNum))
// console.log(lastDigit(16))
// console.log(lastDigit())

// If you don't return your function will automatically return undefined. 

// function noReturn() { // for it's side effects 
//     console.log("hello")
// }

// noReturn()
// function greeting() {
//     console.log("Hello user")
//     console.log("This is tough game")
// }

// greeting()

// function plus(num1, num2) {
//     return num1 + num2
// }

// console.log(plus(4, 5) + plus(10, 6))

function double(num) {
    return num * 2;
}

function square(num) {
    return Math.pow(num, 2) // num * num 
}

function doubleSquare(num) {
    // return square(double(num))
    let doubled = double(num);
    let squared = square(doubled);
    return squared;
}
// console.log(doubleSquare(2))

// let age = 0; 

// function increaseAge() { // using for side effects only. 
//     age++;
// }
// increaseAge();
// increaseAge();
// increaseAge();

// function person() { // Doesn't work
//     let age = 0; 
//     console.log(age);
// }

// console.log(person())

// let animal = "zebra"

// function changeAnimal(newAnimal) {
//     let animal = newAnimal;
//     console.log(animal)
// }

// changeAnimal("cat");

// console.log(animal)