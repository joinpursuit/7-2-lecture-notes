// What is Recursion??
//  Recursion is when a function calls itself until it does not.

//  A recursive function must have two properties
  //  The BASE CASE - which terminates the function 
  //  other logic to be executed to move towards the base case

const happyNewYear = (num) => {
  if (num === 0){
    console.log("HAPPY NEW YEAR");
  } else {
    console.log(`${num}...`);
    happyNewYear(num - 1);
  }
};
console.log(happyNewYear(10))



//  determine if a number is even or odd
// recursively subtract 2 form the number 
// unless the number is 0 || 1

//  this function in only for displaying recursion - dont use it :)
const isEven = (num) => {
  if ( num === 0 ){
    return "number is even";
  }
  if( num === 1 ){
    return "number is odd";
  }
  return isEven(num - 2);
}

// console.log(isEven(5))
const nums = [ 1,2,3,5,6 ];
// expected outcome is 17
//  add all items in an array and return the sum
//  default parameter only happens when the argument is undefined 
const addAll = (arr, sum = 0) => {
  if (arr.length === 0){
    return sum;
  }
  sum += arr.pop();
  return addAll(arr, sum);
}


// write a fucntion that prints the nth number 
// in the FIBONACCI SEQUENCE!@#!@#

// fibo sequence 1,1,2,3,5,8,13,21,34
//  fib(1) => 1  fib(5) => 5 fib(8) => 21
const fibo = (num) => {
  if (num <= 1){
    return 1;
  }
  return fibo(num - 1) + fibo(num - 2);
 }


//  more efficent 
const fibMemo = (num, memo = []) => {
  if( num <=1 ){
    return 1;
  } else if (!memo[num]) {
    memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
   }
   return memo[num];
}




/* 

In mathematics, the factorial of integer 'n' is written as 'n!'. 

It is equal to the product of n and every integer preceding it. 

For example: 5! = 1 X 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

Note: 0! is always equal to 1. Negative values should return null;

*/
// 3  3*2*1
const factorial = (num) => {
  // base case
  if( num === 0 ){
    return 1;
  } 
  if ( num < 0 ){
    return null;
  }
  return num * factorial(num-1)
  // reductive case
}
console.log(factorial(3));

