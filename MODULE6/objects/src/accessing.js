const { simpleObj } = require('./sample_data');

// two ways to access:
// 1. dot notation 
window.simpleObj = simpleObj
simpleObj.a;
// 2. bracket notation is more flexible as we can pass variables
simpleObj['b'];


// ===============================================
// ========          PRACTICE         ============
// ===============================================

// 1. access keys from simpleObj in different ways

// 2. if we have a variable: 
   const myLetter = 'a'; 
// //    console.log(simpleObj[myLetter]);
//    console.log(simpleObj.myLetter)
//    how do we use the variable to access the value 
//    at 'a' from simpleObj?

window.banana = 'ssfsdfsdfsdf'