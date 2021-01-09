// ARRAY METHODS!

const printElements = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    console.log(el);
  }
};

// printElements(["Corey", "Sparky", "Sam", "Peter"])

// forEach method. forEach automatically iterates through an array. And for each element
// calls the passed callback function with the element as the argument.
// it will always return undefined.
// argument for forEach is a function
// take in callbacks - function that gets passed as an argument

// .forEach(callback)// callback is a function that's passed as an argument

// function printEl(el) {

// }

const printElement = (el) => {
  console.log(el);
};

// console.log(typeof printElement)

const printElementsForEach = (arr) => {
  returnarr.forEach((el, i) => {
    console.log(`Index is ${i} and elment is ${el}`);
  });
};

// printElementsForEach(["Corey", "Sparky", "Sam", "Peter"]);

// for(let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     sum += el
// }

// sum: 10
// el: 4

//forEach is use for it's side effects 

const sumElements = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });

  return sum;
};

// console.log(sumElements([1, 2, 3, 4]));

const myIncludes = (arr, target) => {
    arr.forEach((el) => {
        if(el === target) {
            return true;  // does not work. CANNOT return from forEach callback. 
        }
    })

    return false; 
}

// console.log(myIncludes(["cat", "dog", "bird"], "pig"))
// console.log(myIncludes(["cat", "dog", "bird"], "dog"))

const myForEach = (arr, callbackFunction) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFunction(arr[i], i);
  }
};

const findProduct = (numbers) => {
  let prod = 1; 
  numbers.forEach((num) => {
    prod *= num
  })

  return prod; 
}

// console.log(findProduct([1, 2, 3, 4, 5]))

// write a function that takes in an array and returns a 
// new array with every element in the array doubled. 

const doubleArr = (arr) => {
  let output = [];
  arr.forEach((el, i) => {
    output.push(el * 2);
  })
  return output; 
}

console.log(doubleArr([1, 2, 3])) // => [2, 4, 6]