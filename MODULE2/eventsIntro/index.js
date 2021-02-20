// setTimeout(() => {
//     console.log("I am")
// }, 0)
// setTimeout(() => {
//     console.log("WILD")
// }, 0)
// console.log("yoda")

// target -> where the event originally happened 
// currentTarget => where the event is right NOW

const incrementCount = () => {
  const p = document.querySelector("p");
  p.textContent = Number(p.textContent) + 1;
};

const toggleColor = (e) => {
  const square = e.target; 
  if (square.style.background === "blue") {
    square.style.background = "red";
  } else {
    square.style.background = "blue";
  }
};

const setToName = (e) => {
    e.target.textContent = "Corey"
}

let formState = {
    firstName: "", 
    lastName: ""
}

document.addEventListener("DOMContentLoaded", () => {

    // const firstName = document.querySelector("#first-name")
    // const lastName = document.querySelector("#last-name")

    // firstName.addEventListener("change", (e) => {
    //     console.log(formState)
    //     formState[e.target.name] = e.target.value;
    // })

    // lastName.addEventListener("change", (e) => {
    //     debugger
    // })
    
  const h1 = document.querySelector("h1");
  let h1OriginalText = h1.textContent; 

  h1.addEventListener("mouseover", setToName)

  h1.addEventListener("mouseout", () => {
      h1.textContent = h1OriginalText;
  })

  const button = document.querySelector("#increment-count");
  button.addEventListener("click", incrementCount);

  const square = document.querySelector("#square");
  square.addEventListener("click", toggleColor);


  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    h1OriginalText = input.value;
    h1.textContent = input.value; 
    input.value = "";
  })

  const list = document.querySelector("#unorderded-list");
  list.addEventListener("click", (e) => {
    // debugger
  })

// const html = document.querySelector("html");
// html.addEventListener("click", (e) => {
//     debugger
// })

// const body = document.querySelector("body");
// body.addEventListener("click", (e) => {
//     debugger
// })

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (e) => {
//     debugger
// })
// const first = document.querySelector("#first");
// first.addEventListener("click", (e) => {
//     debugger
// })
// const second = document.querySelector("#second");
// second.addEventListener("click", (e) => {
//     debugger
// })
// const ol = document.querySelector("ol");
// ol.addEventListener("click", (e) => {
//     debugger
// })
// const orderedFirst = document.querySelector("#ordered-first");
// orderedFirst.addEventListener("click", (e) => {
//     debugger
// })

});

// Add an html div that is 100px by 100px and the color red.
// When I click the div set the square to be blue.


// Challenge - 
//   When you hover over the h1 tag change the text to be your name 
//  Bonus when you move your mouse off the h1 the text returns to its original 
