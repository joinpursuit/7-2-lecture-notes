// Reduce - most powerful array method NOT a replacement for methods you already know.
// reduce takes in two arguments. First argument is a callback function.
// second argument is option and is called the initial value
//       - If no initial value, the initial value by default is the first element in the array

// callback function has 2 arguments. First argument is called the accumulator/
// 2nd argument is the currentElement that you're on in the iteration.

// accumulators intial value is the InitialValue that was the optional argument.
// if no initalValue, currEl will start as the second element in the array.

// it evalutes to the last accumulator. Each accumulator takes on the value from the last iterations return.

// let arr = ["hello", "cat", "dog"] // => "hellocatdog"

// let str = arr.reduce((acc, currEl) => {
//     return acc + currEl
// }, "goodbye")

// console.log(str)

// acc:  "hellocatdog"
// currEl:


const calcProductTimes3 = (arr) => {
    return arr.reduce((acc, currEl) => {
        return acc * currEl;
    }, 3);
};

const prodOfOdds = (arr) => {
    return arr.reduce((acc, currEl) => {
        if(currEl % 2 === 1) {
            return acc * currEl
        } else {
            return acc; 
        }
    }, 1)
}

// console.log(prodOfOdds(arr));

const onlyEvens = (arr) => {
    return arr.reduce((acc, currEl) => {
        if(currEl % 2 === 0) {
            acc.push(currEl)
        }
        return acc; 
    }, [])
}
let arr = [1, 2, 3, 4, 5];
console.log(onlyEvens(arr));

// acc: [2, 4]
// currEl:  5
