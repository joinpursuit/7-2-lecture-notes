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
  arr.forEach((el, i) => {
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
    if (el === target) {
      return true; // does not work. CANNOT return from forEach callback.
    }
  });

  return false;
};

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
    prod *= num;
  });

  return prod;
};

// console.log(findProduct([1, 2, 3, 4, 5]))

// write a function that takes in an array and returns a
// new array with every element in the array doubled.

// const doubleArr = (arr) => {
//   let output = [];
//   arr.forEach((el, i) => {
//     output.push(el * 2);
//   })
//   return output;
// }

//map is another array method -> evaluates to a new array.
// it iterates through an array and calls the callback for every element and pushes the result into the new array.

const doubleEl = (el) => {
  return el * 2;
};

const doubleArr = (arr) => {
  return arr.map((el) => {
    return el * 2;
  });
};

// console.log(doubleArr([1, 2, 3])); // => [2, 4, 6]

const myMap = (arr, callback) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i], i));
  }
  return output;
};

//write a function that iteraters through and array and returns each element + 2.

const plusTwo = (arr) => {
  let output = arr.map((el) => {
    return el + 2;
  });
  return output;
};

// console.log(plusTwo([1, 2, 3, 4]))

// Write a function that takes in an array of strings and returns
// a new arrray where every stirng has been capitilaized and has an ! at the end.

const shout = (words) => {
  return words.map((word) => {
    return word.toUpperCase() + "!";
  });
};

// console.log(shout(["hello", "world"])) // => ["HELLO!", "WORLD!"]

//write a function that takes in array and returns a new array where every element
// has been mulitipled by its index

// const multByIndex = (numbers) => {
//   return numbers.map((num, i) => {
//     return num * i;
//   })
// }

// console.log(multByIndex([1, 2, 3, 4, 5])) // => [0, 2, 6, 12, 20]

// const sum = (arr) => {
//   let sum = 0;
//   arr.map(el => { // DONT USE MAP FOR SIDE EFFECTS LIKE THIS!
//     sum += el
//   })
//   return sum;
// }
// console.log(sum([5, 5, 6]))

//filter is an array method that evaluates to a new array (non mutative) of only the elements
// that had a truthy return from the callback.

const onlyStrings = (arr) => {
  let output = arr.filter((el) => {
    return typeof el === "string";
  });

  return output;
};
// console.log(onlyStrings(["hello", 4, 5, "cat"]));

//write a function that takes in an array and filters it to only have odd numbers.

const onlyOdds = (nums) => {
  return nums.filter((el) => {
    return el % 2 === 1;
  });
};

// console.log(onlyOdds([1, 2, 3, 4, 5])) // => [1, 3, 5]

//write a function that takes in an array
// and returns a new array with only words that were already capitalized.

const onlyCaps = (words) => {
  return words.filter((word) => {
    return word === word.toUpperCase();
  });
};

// console.log(onlyCaps(["Hello", "CAT", "word"])) // => ["CAT"]

const myFilter = (arr, callback) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      output.push(el);
    }
  }
  return output;
};

// every is an array method that evaluates into a boolean.
// It checks to see if every element passed into the callback evaluates to truthy.

const isAllNumsFive = (nums) => {
  return nums.every((num) => {
    return num === 5;
  });
};

// console.log(isAllNumsFive([5, 6, 5]))

// //write a function that takes in an array and determines if every element in the array
// // is even

const allEvens = (nums) => {
  return nums.every((num) => {
    return num % 2 === 0;
  });
};
// console.log(allEvens([2, 4, 6])) // => true
// console.log(allEvens([2, 4, 7])) // => false

//write a function that determines if all words in an array of a length of five or more.

const allFiveOrMore = (words) => {
  return words.every((word) => {
    return word.length >= 5;
  });
};

// console.log(allFiveOrMore(["hello", "dollys"])) // => true
// console.log(allFiveOrMore(["hello", "cat"])) // => false

const myEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
};

// Sort! Sort is an array method, that sorts our data. => is mutative
// let arr = ["sparky", "mike", "corey", "sam", "peter"];
// arr.sort();
// console.log(arr)

// let nums = [2, 1, 11, 12, 5]
// nums.sort((a, b) => a - b);|««
// console.log(nums)

// Write a function that takes in an array of people and sorts them by age and returns
// a new array of just the names.

// const sortPeopleByAge = (people) => {
//   people.sort((person1, person2) => { // sort is mutative so I'm not saving as a new variable
//     return person1.age - person2.age;
//   });
//   return people.map((person) => {
//     return person.name;
//   });
// };
const sortPeopleByAge = people => {
  return people
    .sort((person1, person2) => {
      return person1.age - person2.age;
    })
    .map((person) => {
      return person.name;
    })
    
};

let persons = [
  { name: "Corey", age: 100 },
  { name: "Sam", age: 18 },
  { name: "Sparky", age: 500 },
  { name: "Peter", age: 50 },
];

console.log(sortPeopleByAge(persons)); // => ["Sam", "Peter", "Corey", "Sparky"]
