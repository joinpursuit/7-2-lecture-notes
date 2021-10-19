// ****** Terms ****** 

// NaN - not a number is returned from number
// methods on something that is not a number;
// NaN is always falsy

// console.log(NaN === NaN)

// Integer - a whole number that is NOT a fraction

let myInt = 10;


// Floats -  aproximate value for a fraction calculated by a computer
let myFloat = 10.24234


// negative -  any number LESS THAN zero

let myNeg = -10


// non negative - any number greater than 0;
let nonNegative = 1000

// ****** Operators ****** 

//  +  can concatenate string OR add numbers
// both of the following are valid
console.log(5+"5")


// - subtracts right side of expression from left
// can NOT be used on a string so it WILL convert arguments to number;
console.log("10"-"50")

//  += || -=  allows sorthand adding and subtracting;

// let x = 10;  x+=2 
let x = 10; x = x + 2;


// * multiply operator returns NaN when used on anything NOT a number

// / is the same
 
//  PEMDAS  "please excuse my dear aunt sally" - dont ask me who came up with this but it stuck for me
//  Parenthesis, Exponents, Multiplication, Division, addition, subtraction;
const num = (16 - 2 + 5 ** 2) / 2;

const dieRoll = () => {
	// highest .99 lowest : 0
	return Math.floor(Math.random() * 6 + 1);
}

const varDieRoll = (num) => {
	return Math.floor(Math.random() * num + 1)
}

const avgRoll = (numSides, numRolls) => {
	let sum = 0;
	for(let i = 0; i < numRolls; i++){
		sum+=varDieRoll(numSides)
	}
	return Math.round(sum/numRolls)
}

console.log(avgRoll(6, 100))

// Lets work with JS Math object to call some methods in a familiar way

// *********  Let's Roll;
// Write a function that returns the average of a N number of die rolls of a die with X number of sides.

// 1. write a function that returns a random number representing a die roll must be less than the number of sies.

// 2. write a function that will roll a certain number of dice with a certain number of sides
//  this must return the average of these rolls.
















