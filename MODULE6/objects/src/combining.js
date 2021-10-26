const { computer, box } = require("./sample_data");

window.box = box;
window.computer = computer;

// Object.assign first arg is TARGET which accepts second arg keys

let res = Object.assign({}, computer, box);

// console.log(computer);
// console.log(res);
// spread 

let res2 = { ...computer, ...box, superComputer:true};
console.log(res2);

// let objA = { a: 5 };
// let objB = { a: 7 };

// let newObj = { a: objA.a + objB.a }

// console.log(newObj);

