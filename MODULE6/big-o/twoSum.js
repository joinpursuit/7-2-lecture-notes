// TWO SUM 
// write a function in specified complexities
// that returns a boolean if there are any two
// elements in `arr` that sum to `target`

// NOTE: 
// cannot use the same number to sum to target 
// unless there are multiple instances of it


// time = O(n^2) 
// space = O(1)
function twoSum (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const num2 = arr[j];
            if (num1 + num2 === target) {
                return true 
            }
        }
    }
    return false;
}


// time = O(n)
// space = O(n)
function fastTwoSum (arr, target) {
    const remainders = {};
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (remainders[currentNum]) {
            return true;
        }

        const remainder = target - currentNum;
        remainders[remainder] = true;
    }   

    return false;
}