// Strings are a primitive data type in JavaScript 
// used to represent and manipulate a sequence of characters.
//  They must be denoted by single or double quotation marks.

// Primitive data types are immutable - THEY CANNOT BE ALTERED
// **That does not mean the variables used to store strings are immutable! - These can be reassigned**


// Strings are *KIND OF* like arrays...
// We can use `.length` to find the length of a string
// Strings also have indexes that allow us to access a particular character
// Or access multiple characters by looping over the string
// We can also use .slice to create substrings from our string


// But in some ways they are very much NOT like arrays!
// We cannot reassign the value at a particular index (because strings are IMMUTABLE, remember?)
// The are some methods that only work on strings (like .substring)
// And some array methods that don't work on substrings at all! (like .reverse)



// LET'S LOOK AT SOME USEFUL STRING METHODS
// charCodeAt - returns the character code (video introduction) for a character in a string
// fromCharCode - returns the letter/character from the unicode value **BONUS** why can we cann this directly on the string class?
// includes - case sensitive search for a set of characters in a string, returns true or false
// indexOf - finds the index of a the first appearance of a character
// padEnd - adds whitespace to the end of a string
// padStart - adds whitespace to the beginning of a string
// repeat - repeats a string, by the value given
// slice - returns a portion of a string, based on position
// substring - returns a portion o a string, based on length
// toString - converts other data types (i.e. numbers) to strings
// trim - removes whitespace from the ends of a string
// JSON.stringify() - converts JSON to a string
    let myJSON = {"name":"John", "age":30, "car":null};


// Let's write a function `is Palindrome` that 
// returns true if the word is a palindrome and false if it is not.
// radar -> true
// borsch -> false
// harpo -> false
// console.log(isPalindrome("radar"));
// console.log(isPalindrome("borsch"));
// console.log(isPalindrome("harpo"));
// What if we had capitalized palindromes?

// Let's write a function that takes a string and 
// returns a new string with all vowels removed.
// disemvowelWord("automobile");
// disemvowelWord("Education!");
// disemvowelWord("My girl wove six dozen plaid jackets before she quit.");


