// sorting takes O(n log(n)) time... 
// a complexity we haven't discussed yet
// mergeSort and quickSort are examples of 
// sorting algorithms with this complexity


// time O(n*log(n))
// space O(1)
function slowAnagrams (str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.sort() === str2.sort();
}


// time O(n)
// space ---- doesn't matter 
function anagramsInBetterSpeedNotSoHotSpace (str1, str2) {
    if (str1.length !== str2.length) return false;

    const counterObj1 = {};
    const counterObj2 = {};

    str1.forEach(char => {
        counterObj1[char] 
            ? counterObj1[char] += 1 
            : counterObj1[char] = 1
    });

    str2.forEach(char => {
        counterObj2[char] 
            ? counterObj2[char] += 1 
            : counterObj2[char] = 1
    });

    return counterObj1 === counterObj2;
}

// time O(n)
// space - O(1)
function bestSpeedAndSpace (str1, str2) {
    if (str1.length !== str2.length) return false;
    const counterObj = {};

    str1.forEach(char => {
        counterObj[char] 
            ? counterObj[char] += 1 
            : counterObj[char] = 1
    });

    str2.forEach(char => {
        counterObj[char] 
            ? counterObj[char] -= 1 
            : counterObj[char] = 1
    });

    for (key in counterObj) {
        const count = counterObj[key];
        if (count !== 0) return false;
    }

    return true;

    // const values = Object.values(counterObj);
    // const filtered = values.filter(num => num !== 0);
    // return filtered.length === 0;
}
