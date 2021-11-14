/*
   ********* BINARY SEARCH **********

   Binary Search is a sorting algorithm technique that leverages the divide and conquer method;
   Binary Seach ONLY works on a sorted array;
   Speed:  O(logn) - worst case is how many times can we split this arr in half
   We find the mid point of the array and see if the value we are looking for
   is greater than or less than the midpoint - or if we're lucky IS the midpoint;
   Depending on the value of the midpoint, we split the array in half again either
   looking higher than the mid point or lower;


   Our steps:
   1.  We need a START var and an END var and then find the MIDDLE of the array;
   2.  If the value we're looking for is GREATER THAN than the value at the MIDDLE
        we only look at the last half of the array and start again this time our START changes
   3.  If the value we need to find is LESS than the value at the MIDDLE
        we only look at the first half of the array
        this time our END changes
   4.  We pick the midpoint of whatever half of the array we need to look at
        and continue the process.
*/

let primes = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (arr, num) => {

    console.time("wholeFoods");
  // make better plz
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    count++;
    if(arr[mid]===num) {
        console.timeEnd("wholeFoods")
        return { foundIndex: mid, steps:count}
    }
    if (arr[mid] < num) {
        start = mid + 1;
    }
    if (arr[mid] > num){
        end = mid - 1;
    }
  } 
  console.timeEnd("wholeFoods");
  return { foundIndex:"not found", steps: count};
};

const bruteSearch = (arr, num) => {
  console.time("WalMart");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === num) {
      console.log("this is the WalMart time");
      console.timeEnd("WalMart");
      return { foundIndex: i, stepsTaken: count };
    }
  }
  console.log("this is the WalMart time we didnt find anything");
  console.timeEnd("WalMart");
  return { foundIndex: "not found", stepsTaken: count };
};

// console.log(bruteSearch(primes, 37));
// console.log(binarySearch(primes, 37))

// lets make a big array

let nums = [];
for (let i = 0; i < 100000; i++) {
  nums.push(Math.floor(Math.random() * 100000));
}
nums.sort((a,b) => a-b);
// nums.unshift(1);
// nums.unshift(1);
// nums.unshift(1);
console.log(bruteSearch(nums, 12313));
console.log(binarySearch(nums, 12313));
console.log("this is a line")
// get some points here! https://www.codewars.com/kata/547bf139ec2cf10b7c0003e6/train/javascript
