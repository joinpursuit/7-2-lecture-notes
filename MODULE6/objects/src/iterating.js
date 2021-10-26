const { computer } = require('./sample_data');


// what are the different ways we can interate the obj?
// lets write some down 
// for( let key in computer ){
//     console.log(computer[key]);
// }
// https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys
// console.log(Object.getOwnPropertyNames(computer));
// console.log(Object.keys(computer));

// let keys = Object.keys(computer);
// for( let [key, value] of Object.entries(computer) ){
//     console.log(key, value);
// };

// console.log(Object.entries(computer))

// for( let value of Object.values(computer) ){
//     console.log(value);
// }