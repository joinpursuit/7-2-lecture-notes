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

// happyNewYear(10)

//  determines if a number is even or odd
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

// fibo sequence 0,1,1,2,3,5,8,13,21,34
//  fib(1) => 1
const fibo = (num) => {
  if (num <= 1){
    return 1;
  }
  return fibo(num - 1) + fibo(num - 2);
 }

const fibMemo = (num, memo = []) =>{
  if( num <=1 ){
    return 1;
  } else if (!memo[num]){
    memo[num] = fibMemo(num - 1, memo)  + fibMemo(num - 2, memo);
   }
   return memo[num];
}

// console.time will show us how long our function executes!
console.time("fibmemo");
console.log(fibo(30));
console.timeEnd("fibmemo");