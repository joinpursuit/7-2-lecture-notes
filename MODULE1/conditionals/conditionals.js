// Conditionals are all about CONTROL FLOW -> flow chart
// if , else if, else 
// Ternary operators (fancy if else statement)
// touch on Switch statements 

// if(condition is truthy) { // inside of parenthesis is considered condition. 
    // do this code block
// } else if(condition truthy) {
    // do this code if you haven't done the first one. 
// } else { // no condition will run as default
    // do default block
// }

//camelCaseEveryNewWordShouldBeCapitalExceptFirstWord

const howOldAreYou = (age) => { // NO RETURN  - RETURNS UNDEFINED   
    if(age >= 21) {
        return "You are old enough to drink"
    } else if(age >= 18 ) {
        return "You're a sober adult"
    } else if(age > 12) {
        return "You're a teenager!"
    } else { // think of as the default 
        return "You're a child!"
    }

}

// console.log("goodbye")
// console.log(howOldAreYou(3)); 
// console.log("greeting");

// Falsy values: 0, "", undefined, false, NaN, null

const test = () => {
    if(!false && NaN) { 
        console.log("33")
    } else if("") {
        console.log("35")
    } else if("dog" && "cat") {
        console.log(37)
    }

    if(!undefined && !0) {
        console.log(41) 
    } else if("undefined") {
        console.log("42")
    } 

    console.log(46)
}

// test(); 
// console.log("last thing logged")


// write a function that takes in a color.
// If the color is primary return you have a primary color
// otherwise return “not a primary color

const isPrimary = (color) => {
    if(color === "blue" || color === "red" || color === "yellow") {
        return color + " is a primary color"
    } else {
        return color + " is NOT a primary color"
    }
}

// console.log(isPrimary("yellow"))// "blue is a primary color"
// console.log(isPrimary("silver")) // "green is NOT a primary color"

// write a function called isAWorkDay that takes in a day of the week. 
// If the day is a weekend - return It's a weekend. 
// If the day of the week is a work day - return it's a work day. 
// Otherwise return - Not a valid day. 

function isAWorkDay(day) {
    day = day.toLowerCase();
    if(day === "saturday" || day === "sunday") {
        return "It's a weekend!"
    } else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        return "It's a work day :-("
    } else {
        return "Not a valid day!"
    }
}

// console.log(isAWorkDay("Monday"))
// console.log(isAWorkDay("sunday"))
// console.log(isAWorkDay("mayday")


const isLeapYear = (year) => {
    if(year % 4 === 0) {
        if(year % 100 !== 0) {
            return true; 
        } else {
            return year % 400 === 0
        }
    } else {
        return false; 
    }
}

// console.log(isLeapYear(1900))
// console.log(isLeapYear(2021))
// console.log(isLeapYear(2000))
// console.log(isLeapYear(2012))

// Ternary 
// is a fancy if else statement. (NO else if);

// const isMorning = (time) => {
//     if(time === "morning") {
//         return "Good Morning"
//     } else {
//         return "Good Evening"
//     }
// }

// condition ? to happen if truthy : to happen if falsy 

// const isMorning = (time) => {
//     return time === "morning" ?  "Good Morning" :  "Good Evening"  
// }

// console.log(isMorning("morning"))
// console.log(isMorning("cat"))

function findBiggest (num1, num2) {
    let bigger = num1 > num2 ? num1 : num2;
    let smaller = num1 > num2 ? num2 : num1;
    // let bigger; 
    // let smaller; 
    // if(num1 > num2) {
    //     bigger = num1; 
    //     smaller = num2
    // } else {
    //     bigger = num2; 
    //     smaller = num1; 
    // }
}

const primaryColor = (color) => {
    switch(color) { // expression that may evaluation is unknown 
        case "red": // if switch express evaluates to this do this. 
            console.log("Is primary");
            break; 
        case "blue":
            console.log("Is primary");
            break;  // takes us out of switch statement
        default: 
            console.log("Not a primary color")
    }
    console.log("END OF FUNCTION") // still gets run unless there's a return
}

primaryColor("blue")
primaryColor("green")