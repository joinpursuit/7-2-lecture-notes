// what is the time  complexity of each of the below algorithms 

// time  ---
// space ---
function findLastElement (array) {
    return array[array.length - 1];
}



// time  --- 
// space ---
function findAverage (array) { 
    const sum = array.reduce(0, (acc, el) => {
        const newNum = acc + el;
        return newNum;
    });

    return sum / array.length;
}



// time  --- 
// space ---
function findLargest (arr) {
    let largest = arr[0]; 
    let i = 0;
    while (i < arr.length) { 
        if (arr[i] > largest) largest = arr[i]; 
        i++; 
    } 

    return largest; 
}



// time  --- 
// space --- 
function countCharsNotSpaces (sentence) {
    const validCountingChars = []; 

    const chars = sentence.split(''); 
    chars.forEach(char => { 
        if (char !== ' ') { 
            validCountingChars.push(char); 
        }
    }); 

    return validCountingChars.length; 
}



// time  ---
// space ---
function findMostRepeatedChar(sentence) {
    const charsArrs = {};
    const words = sentence.split(' ');
    words.forEach(word => {
        const chars = word.split(''); 
        chars.forEach(char => {
            if (!charsArrs[char]) {
                charsArr[char] = []
            }

            charsArr[char].push(1);
        });
    });

    const keys = Object.keys(charsArrs);
    let mostSeenSoFar = 0;
    let mostSeenChar;
    keys.forEach(charKey => {
        const instancesCount = charsArrs[charKey];
        const count = instancesCount.reduce(0, (acc, el) => {
            return acc + el;
        });

        if (count > mostSeenSoFar) {
            mostSeenSoFar = count;
            mostSeenChar = charKey;
        }
    });

    return mostSeenChar;
}