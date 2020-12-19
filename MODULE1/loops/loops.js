// LOOPS!
// Allow us to repeat blocks of code.
// While loop
//for loop

// initialization
// condition while true continue
// code block
// step towards ending the condition.

//lets pretend I wanted to print to the console all the numbers from one to ten;

// const printOneToTen = () => {
//     let num = 1;
//     while(num <= 10000) {
//         console.log(num);
//         num += 1;
//     }
// }

// printOneToTen();

// write a function takes in two arguments. A start and an end.
// it should print out each number from start to finish.

const range = (start, end) => {
  let num = start; // initialize
  while (num <= end) {
    // condition
    console.log(num); // code block
    num++; // step toward the end
  }
};
// range(7, 100)

const infiniteLoop = () => {
  while (true) {
    console.log("FOREVER!");
  }
};
// infiniteLoop();

// write a function in ES6 that prints from 10 to 1, but only the even numbers
// 10, 8, 6, 4, 2

const tenToOne = () => {
  let i = 10;
  while (i > 0) {
    // if(i % 2 === 0) {
    console.log(i);
    // }
    i -= 2;
  }
};

// tenToOne();
// return exits the loop and the function
// break exits the loop and not the function
// continue skips to the next iteration.

const returnFive = () => {
  let i = 0;
  while (i < 10) {
    // i++; // sometimes of benefit to step towards end at beginning, but usually the line before the end of while loop
    if (i === 5) {
      // return console.log("WE HIT 5")
      // break;
      // i++;
      // continue;
    }
    console.log(i);
    i++;
  }
  console.log("MADE IT TO THE END OF FUNCTION");
};

// returnFive()
//For loops
// looping through arrays.

// for(initialization; condition; stepTowardsEnd) {
// code block to repeat
// }
// const printOneToTen = () => {
//   let num = 1;
//   while (num <= 10000) {
//     console.log(num);
//     num += 1;
//   }
// };
const printOneToTen = () => {
  for (let num = 1; num <= 10; num += 1) {
    console.log(num);
  }
};
// printOneToTen();

// write a function that takes in a number. And returns
// the sum of all number up to that number.
// sumToNum(5);
// 0 + 1 + 2 + 3 + 4 + 5 //=> 15
// hints use a variable to update value
// return at the end after the for loop.

const sumToNum = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    // console.log("sum is ", sum)
    // console.log("i is ", i);
    sum += i; // sum = sum + i
  }
  return sum;
};

// console.log(sumToNum(5));
// console.log(sumToNum(5));

const printArrayWhileLoop = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
};

const printArrayForLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
// let animals = ["cat", "dog", "zebra"];
// printArrayForLoop(animals)

//Write a function that takes in an array
// and returns the sum of all the elements in the array.
// [3, 5, 6] //=> 14
// let i = 0
// arr[i] // the value in the array at the given index.
const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    // All the same -> i += 1 i++ i = i + 1
    sum += arr[i];
  }
  return sum;
};

console.log(arraySum([3, 5, 6, 2, 4]));
