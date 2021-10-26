const { simpleObj } = require('./sample_data');

// two ways to set:
// 1. dot notation 
// 2. bracket notation

// ===============================================
// ========          PRACTICE         ============
// ===============================================

// 1. add some new keys to simpleObj in different ways

// 2. if we have an array of tuples (two element arrays):

const tuples = [
    ["the new key", 100],
    ["anotherKey", "VALUE"],
];

for(let i = 0; i < tuples.length; i++){
    // let currentTup = tuples[i]
    // simpleObj[currentTup[0]] = currentTup[1];
    const [key, value] = tuples[i];
    simpleObj[key] = value
};


//    iterate the array, and for each tuple set a new 
//    key: value pair in simpleObj