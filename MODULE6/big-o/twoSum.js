// TWO SUM 
// write a function in specified complexities
// that returns a boolean if there are any two
// elements in `arr` that sum to `target`

// NOTE: 
// cannot use the same number to sum to target 
// unless there are multiple instances of it


// time = O(n^2) - quadratic 
// space = O(1)
function twoSum (arr, target) { [1,2,3], 5
    for (let i = 0; i < arr.length; i++) { // n 
        const num1 = arr[i]; // 1 
        for (let j = i + 1; j < arr.length; j++) { // n 
            const num2 = arr[j]; // 1
            if (num1 + num2 === target) {
                return true 
            }
        }
    }
    return false;
}


// time = O(n) - linear 
// space = O(n)
function fastTwoSum (arr, target) {
    // iterate the arr, and store the remainer of target - current el in iteration 
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

// [1,3,5,6] --- 9

// differences = { 8: 1, 6: 3, 4: 5 }
// i = 3
// num = 6 
// diff = 3
// differences['6'] ? 