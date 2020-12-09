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

function sumOfTwoNumbers(num1, num2) {
    let animal = "cat"

    function insideFunction() {
        console.log(animal)
    }
    insideFunction()
    return num1 + num2; 
}

console.log(animal)
console.log(sumOfTwoNumbers(6, 4))
