/*
    
     ********  MERGE SORT  **********

    Merge sort is an efficient sorting algorithm. 
    It works on the principle of Divide and Conquer. 
    Merge sort repeatedly breaks down a list into several sublists 
    until each sublist consists of a single element and merging 
    those sublists in a manner that results into a sorted list.
    Starts by comparing every two elements and swapping them 
    if the first item is less than the second. 
    It then merges each of the resulting lists of two into 
    lists of four using the same comparison, then merges those lists of four, 
    and so on; until at last two lists are merged 
    into the final sorted list.

    Merge sort is a fast, stable sort,
    meaning it will keep the elements in original order 
    in the case of duplicate or equal values.
    Time complexity: O(n(logn)) N time to reassemble and log(n) to split;
    Space is O(n) - one of its weaknesses.
    Merge sort is great in multi-threaded languages like Java
    as threads working side by side can sort the arrays while they are being
    split at once.

    DIVIDE AND CONQUER

      In CS, Divide and Conquer is a term used to describe a certain 
      paradigm for implementing algorithms.  Any algorithm that adheres
      to a Divide and Conquer methodology functions by breaking a problem
      down into a smaller version of the same problem.  This effect is 
      repeated until a simple solution can be found.  The results are then 
      recompiled to return a solution.



Merge sort by the numbers 

    Imagine we need to sort the following array:

    [4, 8, 7, 2, 11, 1, 3]

    1.  DIVIDE - Split the array in two
        
        [4, 8, 7, 2], [11, 1, 3]

    2.  Continue splitting until all arrays are SINGLE ELEMENTS

         [4, 8, 7, 2], [11, 1, 3]
            /   \          /  \
        [4, 8]  [7, 2] [11,1] [3]
          /\      /\        /\   \  
        [4] [8] [7] [2], [11] [1] [3]
        
    3. CONQUER - pushing the elements into a new array one by one

         [4], [8], [7], [2], [11], [1], [3]
            |          |          |     |
          [4, 8], [2, 7],  [1, 11] , [3]

    4.  Continue until we have one array
        [ 4, 8], [2, 7],  [1, 11], [3]
            \      |        |      /
          [2, 4, 7, 8], [1, 3, 11]
                |            |
            [1, 2, 3, 4, 7, 8, 11]

    */
const testArr = [4, 8, 7, 2, 11, 1, 3];
const badSort = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    for (let j = 1; j < arr.length; j++) {
      count += 1;
    if (arr[j - 1] > arr[j]) {
        // this is called Array destructuring assignment
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  console.log(count);
  return arr;
};
// console.log(badSort(testArr))
//  Step one, lets build our CONQUER step for use later
//  once we have a DIVIDE step
const left = [4, 8, 1];
const right = [6, 3];

const merge = (left, right) => {
  // where to begin?
  let sorted = [];
  while (left.length &&  right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
};

// Step TWO DIVIDE
// now that we have a conquer function that merges
//

const mergeSort = (arr) => {
  //  now what?
  // BASE CASE 
  if(arr.length <= 1){
    return arr;
  }
  // REDUCTIVE CASE 
  const mid = Math.ceil(arr.length/2);
  const left = arr.splice(0, mid);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
};

// console.log(mergeSort(testArr));




//  ******** Array.prototype.sort() ********

/* lets sort these cards using .sort()
  from the MDN docs:
  The sort() method sorts the elements of an array in place 
  and returns the sorted array.  
  The default sort order is ascending, 
  built upon converting the elements into strings, 
  then comparing their sequences of UTF-16 code units values

  BUT we can pass a compareFunction as a callback.
  This compare function accepts two arguments and
   MUST return a number;
  IF the number is > 0 - the second argument first;
  IF the number is < 0 the first argument is sorted first;
  returning  0 keeps the original order;
*/
// cards are cool.
const cards = [
  { face: 8, value: 8, suit: "Hearts" },
  { face: "Queen", value: 10, suit: "Clubs" },
  { face: 5, value: 5, suit: "Spades" },
  { face: "Jack", value: 10, suit: "Spades" },
  { face: 9, value: 9, suit: "Clubs" },
  { face: "King", value: 10, suit: "Diamonds" },
  { face: 2, value: 2, suit: "Diamonds" },
  { face: "Queen", value: 10, suit: "Diamonds" },
  { face: 5, value: 5, suit: "Clubs" },
  { face: "Ace", value: 11, suit: "Diamonds" },
  { face: "Jack", value: 10, suit: "Diamonds" },
];

//  things to REMEMBER
//  we always have two arguments (a, b);
//  return > 0 SWAP (b for a)
//  if return < 0 (a, before b);
//  if  0 remain the same.
const cardSort = (arr) => {
  return arr.sort((a,b) => {
    if(a.suit < b.suit) return -1;
    if(a.suit > b.suit) return 1;
    if(a.value < b.value) return -1;
    if(a.value > b.value) return 1;
    //  we only get here if values are both 10
    // if(a.face ==="Queen" && b.face ==='Jack') return 1;
    // if(a.face ==="King" && b.face ==="Queen") return 1;
    // if(a.face ==="King" && b.face ==="Jack") return 1;
    if((a.face === "Jack" && b.face ==="Queen") || (a.face ==="Jack" && b.face ==="King") ) return -1;
    if(a.face ==="Queen" && b.face === "King") return -1
   



    return 0
  })
}

console.log(cardSort(cards));



let stop = ""