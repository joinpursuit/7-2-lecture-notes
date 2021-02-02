/**
* Return the smallest number in an array of numbers.
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns smallest number
*
* ex: smallest([3, 0])
* returns 0
*
* ex: smallest([1, -1, 1, 1, 1])
* returns -1
*
* ex: smallest([1, 1, 2])
* returns 1 (does not matter if it is the first or second 1)
*/

// function smallest(nums) {
//     return Math.min(...nums);
// }
/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

// sorting big O time complexity  sorting is N log(n)

function secondSmallest(nums) {
    if(nums.length < 2) return null; 
    
    let smallest = Infinity;   
    let secondSmallest = Infinity; 

    nums.forEach(num => {
        if(num < smallest) {
            secondSmallest = smallest;
            smallest = num; 
        } else if(num < secondSmallest) {
            secondSmallest = num; 
        }
    })
    return secondSmallest

}

// function secondSmallest(nums) {
//     if(nums.length < 2) {
//         return null; 
//     }
//     nums.sort((a, b) => a - b)
//     return nums[1];
// }

module.exports = secondSmallest;
