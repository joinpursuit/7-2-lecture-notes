
const quadraticeDoubleLoop = (arr) => {
    console.log("I,J")
    for(let i = 0; i < arr.length; i += 1) {
        for(let j = 0; j < arr.length; j++) {
            console.log(i, j)
            console.log(arr[i], arr[j])
        }
    }
}
// let animals = ["cat", "whale", "dog", "bird"];
// quadraticeDoubleLoop(animals)


//sorting is time Nlog(n) okay time but slow. 


// return arr.sort((a, b) => a - b)[1]
// keeping two variables smallest and secondSmallest
// if num < smallest we updated secondSmallest to be old smallest, 
// and new num to be smallest. 
// if num < secondSmall update secondSmall
const secondSmallest = (arr) => {
    let smallest = Infinity;
    let secondSmallest = Infinity; 

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(num < smallest) {
            secondSmallest = smallest;
            smallest = num; 
        } else if(num < secondSmallest) {
            secondSmallest = num; 
        }

    }

    return secondSmallest; 
}


// let numsArr = [-4, 5, 12, 2, 1];
// console.log(secondSmallest(numsArr))

//takes an array and return an array with all values but no duplicates. 
// input [4, 2, 6, 2, 2, 6, 4, 9, 2, 1]
// output [4, 2, 6, 9,  1]

// having an output array 
// iterating through input array 
// checking output for inclusion 
// if included, continue 
// else add to output

//continue keyword that means move on to next iteration 
// break keyword that means break out of the loop (stop the loop!)
// return keyword to exist loop AND function!

function removeDups(arr) {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(!output.includes(num)) {
            output.push(num)
        }
    }
    return output;
}

// console.log(removeDups([4, 2, 6, 2, 2, 6, 4, 9, 2, 1]));

const findIndexOf = (arr, target) => {
    for(let i = 0; i < arr.length; i += 1) {
        const el = arr[i];
        if(el === target) {
            return i; 
        } 

    }
    return -1; 
}
// console.log(findIndexOf(["cat", "dog", "bird", "whale", "pig"], "snake"))

//Write a function that takes in two arrays and returns them merged into each other. 
// [1, 2, 3] [4, 5, 6] // [1, 2, 3, 4, 5, 6];

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
    // let output = [];
    // for(let i = 0; i < arr1.length; i++) {
    //     output.push(arr1[i])
    // }
    // for(let i = 0; i < arr2.length; i++) {
    //     output.push(arr2[i])
    // }
    // return output;
    // return [...arr1, ...arr2] spread operator -> look this up on google
}

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

const arrIncludes = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el === target) {
            return true; 
        } 
    }
    return false; 
}

const countOccurence = (arr, target) => {
    let count = 0; 
    for(let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el === target) {
            count++; 
        } 
    }
    return count; 
}
// let animals = ["cat", "dog", "bird", "dog"]
// console.log(countOccurence(animals, "snake"))
// console.log(countOccurence(animals, "dog"))

// Write a function that doubles every element in an Array. 
//  functiondoublesArray(arr){
//     let output = [];
//     for(let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * 2);
//     }
//     return output; 
// };

// largest and secondLargest variables 
// if num > largest 
// secondLargest = largest
// largest = num; 
// else if num > secondLargest 
  // secondLargest = num; 

const secondLargest = (arr) => {
    let largest = -Infinity; 
    let secondLargest = -Infinity; 

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(num > largest) {
            secondLargest = largest;
            largest = num; 
        } else if(num > secondLargest) {
            secondLargest = num; 
        }
    }

    return secondLargest;
}
console.log(secondLargest([6, 4, 8, 7]))

