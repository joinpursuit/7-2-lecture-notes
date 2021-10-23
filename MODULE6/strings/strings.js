// Strings are a primitive data type in JavaScript used 
// to represent and manipulate a sequence of characters.
// They must be denoted by single or double quotation marks.

let myString = "this is a string";

let myOtherString = 'this is another string';

// Primitive data types are immutable - THEY CANNOT BE ALTERED
// **That does not mean the variables used to store strings are immutable! - These can be reassigned**
    myOtherString = "this is a different string";
    // console.log(myOtherString)
    myOtherString[0] = "g";
    // console.log(myOtherString[0]);

// Strings are *KIND OF* like arrays...
// We can use `.length` to find the length of a string
    console.log(myOtherString.length);

// Strings also have indexes that allow us to access a particular character

    console.log(myOtherString[5]);

// Or access multiple characters by looping over the string

    // for(let i = 0; i < myOtherString.length; i++){
    //     console.log(myOtherString[i])
    // };

    // for(char of myString){
    //     console.log(char)
    // }

// We can also use .slice to create substrings from our string

    let newString = myOtherString.slice(10, 19)

    // console.log(newString)

// But in some ways they are very much NOT like arrays!
// We cannot reassign the value at a particular index (because strings are IMMUTABLE, remember?)
    newString[3] = "z"
    console.log(newString)
// The are some methods that only work on strings (like .substring)
    let otherNewString = myOtherString.substring(10, 19);
    console.log(otherNewString);
    // ^^ works exactly like slice
    let otherSubstring = myOtherString.substr(10, 9)
    console.log(otherSubstring);
    // ^^ first arg is starting idx, second arg is length of substring
    

// And some array methods that don't work on substrings at all! (like .reverse)

    let splitSubstring = otherSubstring.split("").reverse().join("")
    console.log(splitSubstring)


// LET'S LOOK AT SOME USEFUL STRING METHODS
// charCodeAt - returns the character code (video introduction) for a character in a string
    let newFavMovie = "Dunee";
    //    console.log(newFavMovie.charCodeAt(3)) 

// fromCharCode - returns the letter/character from the unicode value **BONUS** why can we cann this directly on the string class?
    let favMovieAgain = String.fromCharCode(68, 117, 110, 101);

    // console.log(favMovieAgain)

// includes - case sensitive search for a set of characters in a string, returns true or false
    console.log(newFavMovie.includes("d"))

// indexOf - finds the index of a the first appearance of a character

    console.log(newFavMovie.indexOf("un"))
    // ^^ returns -1 if not found in string

// padEnd - adds whitespace to the end of a string
    console.log(newFavMovie.length)
    let paddedEnd = newFavMovie.padEnd(7, "e");
    console.log(paddedEnd.length);
    console.log(paddedEnd);

// padStart - adds whitespace to the beginning of a string
    let paddedStart = newFavMovie.padStart(newFavMovie.length + 5, "_")

    console.log(paddedStart)
// repeat - repeats a string, by the value given

    let tripleDune = ""

    tripleDune += newFavMovie.repeat(3);
    console.log(tripleDune);

// slice - returns a portion of a string, based on position

// substring - returns a portion o a string, based on length

// toString - converts other data types (i.e. numbers) to strings
        let ourNumber = 19

        console.log(typeof ourNumber)
        console.log(typeof ourNumber.toString())
// trim - removes whitespace from the ends of a string
    let fatMovie = "   Du ne  "
    fatMovie = fatMovie.trim();
    console.log(fatMovie)

// JSON.stringify() - converts JSON to a string
    let myJSON = {"name":"John", "age":30, "car":null};
    let stringJSON = JSON.stringify(myJSON)
     console.log(JSON.parse(stringJSON));

// Let's write a function `is Palindrome` that 
// returns true if the word is a palindrome and false if it is not.
// radar -> true
// borsch -> false
// harpo -> false
    // var with reversed string
    // check if original string is eq to new str
    // create condition return true if equal false if not

    const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("Radar"));
console.log(isPalindrome("borsch"));
console.log(isPalindrome("harpo"));
// What if we had capitalized palindromes?

// Let's write a function that takes a string and 
// returns a new string with all vowels removed.
    // make a new str var
    // create a string with all vowels
    // iterate through our string
    // check if vowels includes the char at idx
    // if char is vowel dont add newstr
    // else add char to newstr
    // return the newstr

    const disemvowelWord = (string) => {
        let newString = ""
        let vowels = "aeiouAEIOU"

        for(let char of string){
            if (!vowels.includes(char)) newString += char
        }

        console.log(newString) 
    };
disemvowelWord("automobile");
disemvowelWord("Education!");
disemvowelWord("My girl wove six dozen plaid jackets before she quit.");


