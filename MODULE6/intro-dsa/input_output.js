// Problem 
// return an array with the first 10 numbers, 
// if given a number, return an array with the 
// following 10 numbers 

// W/ OUT INPUT 
// function tenNums() {
//     return [1,2,3,4,5,6,7,8,9,10];
// }

// WITH INPUT 
function tenNums(number = 0) {
    return [
        ++number,
        ++number,
        ++number,
        ++number,
        ++number,
        ++number,
        ++number,
        ++number,
        ++number,
        ++number,
    ]
}