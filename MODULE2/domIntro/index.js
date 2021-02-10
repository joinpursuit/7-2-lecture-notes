// const color = prompt("What's your favorite color?").toLowerCase().trim();
// let displayMessage;
// const primaryColors = ["yellow", "red", "blue"];
// if (primaryColors.includes(color)) {
//   displayMessage = `${color} is a primary color`;
// } else {
//   displayMessage = `${color} is NOT a primary color`;
// }
// alert(displayMessage);


// const input = Number(window.prompt("Enter a number!"));
// if(isNaN(input)) {
//     window.alert("Please enter a real number")
// } else {
//     window.alert(input * 2);
// }

// document is the object that represents the content of the page and serves
// as an entry point into the content. 

// document.querySelector("cssSelector") -> tag .class #id 
// document.getElementById("id-of-tag");
// once we have a DOM element you can use different properties. 
// innerHTML => shows the html and can be assigned new HTML
// innerText => shows human readable text and can be assigned. 

// const h1 = document.getElementById("h1-tag");
// debugger
// h1.innerText = "Howdy Partner"

// const userName = prompt("What is your name?!");
// const h1 = document.getElementById("h1-tag");
// const titleTag = document.querySelector("title");
// h1.innerText = userName; 
// titleTag.innerText = userName; 

const changeHeader = () => {
  const input = document.querySelector("#header-change");
  const h1 = document.getElementById("h1-tag");
  h1.innerText = input.value;
}

const replaceWithStar = () => {
    const input = document.getElementById("replace-with-star");
    const p = document.getElementById("text-with-star");
    const str = input.value;
    let output = "";
    const vowels = "aeiouAEIOU";
    for(const char of str) {
        if(vowels.includes(char)) {
            output += "*";
        } else {
            output += char; 
        }
    }

    p.innerText = output; 
}