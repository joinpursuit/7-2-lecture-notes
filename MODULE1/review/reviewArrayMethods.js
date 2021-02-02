//Create a function that returns the number of times we see a string

function numOfString(arr) {
  return arr.filter((el) => {
    return typeof el === "string";
  }).length;
}

function numOfStrings2(arr) {
  let counter = 0;
  arr.forEach((el) => {
    if (typeof el === "string") {
      counter += 1;
    }
  });
  return counter;
}

// console.log(numOfString([1,2,"Sparky","Corey",3,4,"Mike"])) //3

// // custom Map Function
// // retuns an array
// function myMapFunction(arr, callbackFunction){

// }

// Custom forEach function
// returns  - undefined
function myForEach(arr, num, callbackFunction) {
  for (let i = 0; i < arr.length; i++) {
    nums.push(callbackFunction(arr[i], num));
  }
}

//returns an array
function myMapFunction(arr, callBackFunction) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callBackFunction(arr[i], i));
  }
  return newArray;
}

const callBackFunction = (el) => {
  return el * 5;
};

function actualMap(arr) {
  return arr.map((el) => el * 5);
}

const multiple = (arr, num) => {
  let nums = [];
  arr.forEach((el) => {
    nums.push(el * num);
  });
};

//return a array of strings containing the names of the cars that are red
const findCarsThatAreRed = (arr) => {
  return arr
    .map((el) => {
      if (el.color === "red") {
        return el.car;
      }
    })
    .filter(function (el) {
      return el;
    });
};

const redCars = (array) =>
  array.filter((el) => el.color === "red").map((el) => el.car);

// console.log(findCarsThatAreRed([{car:"Saab", color:"red", year:"2011" }, {car:"Volvo", color:"blue", year:"2015" }, {car:"BMW", color:"red", year:"1960" }]))
// console.log(findCarsThatAreRed([{car:"Saab", color:"red", year:"2011" }, {car:"Volvo", color:"blue", year:"2015" }, {car:"BMW", color:"red", year:"1960" }]))

const myFilterFunction = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

//return a array of strings containing the names of the cars that are red
const callback = (el) => {
  if (el.color === "red") {
    return true;
  } else {
    return false;
  }
};

// [
//   { car: "Saab", color: "red" },
//   { car: "Volvo", color: "blue" },
// ].filter();

// console.log(
//   myFilterFunction(
//     [
//       { car: "Saab", color: "red", year: "2011" },
//       { car: "Volvo", color: "blue", year: "2015" },
//       { car: "BMW", color: "red", year: "1960" },
//     ],
//     (el) => el.color === "red"
//   )
// );

//This method is returning the frequency of target characters 
//1. create a counter variable and assign a default value of 0
//2. Iterate through the string 
//3. If the current char equal to the target we increment the counter by one
//4. Return the counter
const findTargetCharacters = (names) => { 

    for(let name of names){
        console.log(name)
    }

    for(let i = 0; i < names.length; i++){
        console.log(names[i])
    }

    return true;
  }
  
// console.log(findTargetCharacters(["Andres", "Sparky", "Corey"]));


