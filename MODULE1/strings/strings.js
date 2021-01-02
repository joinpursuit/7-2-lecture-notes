// "string"
// 'single quote string'
// "you look 'good' "
// 'you look "good" '

// strings are surrounded by double and single quotes, they must match up. 
// strings are a list of characters. 
//special characters start with a backslash. \ 

// let string = "Hello how are \n you"
// console.log(string)

// let str = 'you look \'good\''
// console.log(str)

// let str = "\"Hello \"JIMBO\" \nI hope you have a great \nday \""

// console.log(str)

// strings like arrays also have a length property.  We don't invoke properties, only methods()

// let str = "   !";
//         01234...
// console.log(str.length);
// console.log(str[2]);

//how would I log the last character. (should work for any string)
// write it in the chat box but don't hit enter yet. 
// console.log(str.length)
// console.log(str[str.length - 1])

// string concatenation? is when you add strings together. 
// let num = 4 
// num += 2 // syntactic sugar for num = num + 2

// let str = "Hello ";

// str += "goodbye" // syntactic sugar for str = str + "goodbye"

// console.log(str)

function noOs(str) {
    let output = "";

    /// iterate through our string 
    // if current Char is not an o, we want to add it to our output
                                                // str: moose -> length: 5
                                                // output: "mse"
    for(let i = 0; i < str.length; i += 1 ) {    // i: 5
        // if(str[i] === str[i].toLowerCase()) // checks to see if already lowercase
        let currChar = str[i].toLowerCase();                   // currChar: e
        if(currChar !== "o") {
            output += currChar;
        }
    }

    return output; 
}

// console.log(noOs("corey"))
// console.log(noOs("moose"))
// console.log(noOs("Octopus"))

// i	
// 1	'1, '
// 2	'1, 2, '
// 3	'1, 2, 3'
// 4	'1, 2, 3, 4'
// 5	'1, 2, 3, 4, 5, '
// write a function that iterates from 1 to 5 and 
// evaluates to the the string '1, 2, 3, 4, 5, '
// You'll need to be building a string based on numbers. (tip anything plus a string becomes a string)

const oneToFive = () => {
    let output = ""
    for(let i = 1; i <= 5; i += 1) {
        output += i + ", "
        // console.log(output)
    }
    return output;
}

// console.log(oneToFive());

// strings in JS are a primitive (just like numbers). And is thus immutable. 
// strings cannot be changed. 
// we can change the variable with reassignment but not the string itself. 

// let fruits = ["oranges", "pears", "pineapples"];
// fruits[1] = "strawberries";
// console.log(fruits)

// let str = "happy New Year!";
// str[0] = str[0].toUpperCase() // cannot change specific characters at index with strings
// // console.log(str.toUpperCase());
// console.log(str);

// slice is a string method that work identically to the array method slice that we learned. 
// slice takes in two arguments, second argument is optional. 
// first argument is starting index (inclusive )
// second argument is stoping index (exclusive) will default to length of string if no argument is given. 
// let str = "Happy new Year!";
// // console.log(str.slice(0, 5))
// str = str.slice(0, 6) + str[6].toUpperCase() + str.slice(7)


// // console.log(str + 2021) // not reassign
// str += 2021 // does reassign
// console.log(str)

// let str = "Happy New Year";
// let wordArray = str.split(" "); // split on the character that's passed in - evaluates to an array 
// console.log(wordArray)

// let charArray = str.split("");
// console.log(charArray);

// let test = str.split("a");
// console.log(test); // ["H", "ppy New Ye", "r"]
let age = 100;
// template literals with backticks allow for string interpolation.
let str = `hello
there my age is ${age + 5}` // inside of ${} is evaluated first as JS. 

// console.log(str)

// Number into string
// plus a string to a number
// "" + 5 => give back "5"
// call built in method toString(); 

let num = 5; 
// console.log("5" === num.toString());

// turning a string into a number 
// with parseInt 
// also with Number  Number(strNum)

let strNum = "13";
console.log(parseInt(strNum) === 13)