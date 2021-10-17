// what is the time  complexity of each of the below algorithms 
// what is the space complexity of each of the below algorithms 

// time  --- constant --- O(1)
// space --- 
function findLastElement (array) {
    return array[array.length - 1];
}



// time ---- O(n)
// space ---- O(2)... O(1)
function findAverage (array) { 
    const sum = array.reduce(0, (acc, el) => { // O(1)
        const newNum = acc + el; // O(1) 
        return newNum; // 1
    }); // (n + 1 + 1)

    return sum / array.length; // O(4) ... 1 + 1 + 1 + 1 
}



// time  --- O(n)
// space --- O(1)
function findLargest (arr) {
    let largest = arr[0]; 
    let i = 0;
    while (i < arr.length) { 
        if (arr[i] > largest) largest = arr[i]; 
        i++; 
    } 

    return largest; 
}


//

function countCharsNotSpaces (sentence) {
    const validCountingChars = []; 

    const chars = sentence.split(''); 
    chars.forEach(char => { // 1 
        if (char !== ' ') { 
            validCountingChars.push(char); 
        }
    }); 

    return validCountingChars.length; 
}


// time 
// space 
function findMostRepeatedChar(sentence) {
    const charsArrs = {}; //1
    const words = sentence.split(' '); //n
    words.forEach(word => {
        const chars = word.split(''); 
        chars.forEach(char => {
            if (!charsArrs[char]) {
                charsArr[char] = []
            }

            charsArr[char].push(1);
        });
    }); //n

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