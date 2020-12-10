// Functions allow us to write reusable code blocks.
// We declare our function with keyword function.
// Then name our function. camelCase what it does
// parentheses, then open and close curly brackets.
// functions evaluate to whatever they return.

function greeting(name) {
  let str = "Hello ";
  return str + name;
}

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