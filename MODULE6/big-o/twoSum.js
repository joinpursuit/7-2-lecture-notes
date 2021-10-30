// TWO SUM 
// write a function in specified complexities
// that returns a boolean if there are any two
// elements in `arr` that sum to `target`

// NOTE: 
// cannot use the same number to sum to target 
// unless there are multiple instances of it

// [1,2,3,5,6,7,8,9,10].lemght 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

function twoSum (arr, target) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        const num1 = arr[i]; // O(1) ---- S(1)
        for (let j = i + 1; j < arr.length; j++) { // O(n / 2)
            const num2 = arr[j]; // O(1) ---- S(1)
            if (num1 + num2 === target) { // O(1)
                return true // O(1)
            }
        }
    }
    return false;
}


// [1,2,3,4,5,6,7,8,9,10], 1093487653945
// remainders  O(1) 
// iterate process.env.LENGTH n
// returniong 1

// time  = (n)
// space = (n)
function fastTwoSum (arr, target) {
    // const obj = {
    //     18: true, // O(1)
    //     17: true, // O(1)
    //     17: true, // O(1)
    //     17: true, // O(1)
    //     17: true, // O(1)
    //     17: true, // O(1)
    //     17: true, // O(1)
    //     17: true, // O(1)
    //     9: true, // O(1)
    // }
    const remainders = {}; // O(1) ---- S(1)
    for (let i = 0; i < arr.length; i++) { // O(4n) 
        const currentNum = arr[i]; // S(1)
        if (remainders[currentNum]) { 
            return true;
        }

        const remainder = target - currentNum;  // S(1)
        remainders[remainder] = true; // S(n)
        // we'er iterating over the input (remember the tough often is identifying the input)
        // for each element we store a key value pair in `remainders` 
        // so the size of remainders will be the same as input arr.
    }   

    return false; // O(1)
}