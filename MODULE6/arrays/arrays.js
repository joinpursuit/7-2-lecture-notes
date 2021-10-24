/*
    Arrays are Lists or collections of items;
    We should always name our rarrays or items semantically 
    with plural expressive names, and as we iterate we should 
    match each element to corespond with the named array.  
    Ideally, it should read like a sentence;
*/

// Instantiating - how do we create a new INSTANCE of an array?
    let arr1 = [];
    // let arr2 = "string".toArray();
    let arr3 = new Array("arg")
    // ^^ when arg is a number and the only arg create array of that length
    console.log(arr3)

// Indexing  -  How to get elements at a certain array INDEX or change them.
    let tempArr = [1, 2, 3];
    let firstEl = tempArr[0];
    firstEl = "something else";
    // ^^ this will not reassign tempArr[0]
    tempArr[0] = "something other than else";
    // ^^ only this will reassign the value at this index in the array
    console.log(tempArr[0]);
    console.log(firstEl);

// Higher order array functions - map, forEach, and reduce.
    let dummyArr = [4, 5, 6];
    const newArr = dummyArr.forEach((num) => num +1);
    console.log(newArr);

    let callbackFunc = (element) => {console.log(element)}
    const result = dummyArr.map((element) => {console.log(element)})
    // ^^ iterates dummyArr and calls callback fn with each element of dummyArr
    console.log(result)

// Other useful methods: sort, find, indexof, findIndex, filter, some;

    function findIdx(array, el){
        for(let i = 0; i < array.length; i++){
            if (array[i] === el){
                return i
            }
        }
        return -1;
    }

    console.log(findIdx([0, 1, 1, 3], 1))
/*
    It's important to remember that Array all array methods can be written
    from scratch.  We don't need to invoke Array.prototype.sum() in order to
    get the same effects.  Lets try to write our own custom Array.prototype methods.
*/

// Custom IndexOf

// Custom Some

// Custom Find


// Lastly - lets tackle a problem with an Array of Arrays
/*
    Given a 2 dimensional array that is always made up of the same number 
    of items in the outer and inner arrays, 
    find the greatest sum - whether it is across, up/down.

*/ 