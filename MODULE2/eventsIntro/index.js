// setTimeout(() => {
//     console.log("I am")
// }, 0)
// setTimeout(() => {
//     console.log("WILD")
// }, 0)
// console.log("yoda")

// Asynchronous happens after synchronous code.
// we can add listeners to  DOM elements with addEventListener
// addEventLister takes in two arguments
//      1st - type of event (click, change, mouseover, mouseout, etc...)
//      2nd - callback function to run when event occurs (can be anonymous or named)
///               - takes the event itself as the argument

// target -> where the event originally happened
// currentTarget => where the event is right NOW

const incrementCount = () => {
  const p = document.querySelector("p");
  p.textContent = Number(p.textContent) + 1;
};

const toggleColor = (e) => {
  const square = e.target;
  const square2 = e.currentTarget;
  debugger;
  if (square.style.background === "blue") {
    square.style.background = "red";
  } else {
    square.style.background = "blue";
  }
};

let formState = {
  firstName: "",
  lastName: "",
};

document.addEventListener("DOMContentLoaded", () => {
  // to wait to run code till after the content (used when there was no defer)

  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");

  firstName.addEventListener("change", (e) => {
    console.log(formState);
    formState[e.target.name] = e.target.value;
  });

  lastName.addEventListener("change", (e) => {
    debugger;
  });

  const h1 = document.querySelector("h1");
  let h1OriginalText = h1.textContent;

  const setToName = (e) => {
    e.target.textContent = "Corey";
  };

  h1.addEventListener("mouseover", setToName);

  h1.addEventListener("mouseout", () => {
    h1.textContent = h1OriginalText;
  });

  const button = document.querySelector("#increment-count");
  button.addEventListener("click", incrementCount);

  const square = document.querySelector("#square");
  square.addEventListener("click", toggleColor);

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // if your page is refreshing you forgot this line
    const input = document.querySelector("input");
    h1OriginalText = input.value;
    h1.textContent = input.value;
    input.value = "";
  });

  //   const list = document.querySelector("#unorderded-list");
  //   list.addEventListener("click", (event) => {
  //     debugger
  //   })

  document.addEventListener("mousemove", (event) => {
    const coords = document.querySelector("#coords");
    //   debugger
    coords.textContent = `x coord: ${event.clientX}, y coord: ${event.clientY}`;
  });
  //grabbing and element, adding a listener, declaring a callback, and
  // doing something from or with the event.

  // const html = document.querySelector("html");
  // html.addEventListener("click", (e) => {
  //     debugger
  // })

  // const body = document.querySelector("body");
  // body.addEventListener("click", (e) => {
  //     debugger
  // })

  const ul = document.querySelector("ul");
  ul.addEventListener("click", (e) => {
    console.log(e.target, e.currentTarget);
    // debugger
    if (e.target.textContent === "ordered list first") {
      e.target.textContent = "Third Ordered list";
    }
  });
  const first = document.querySelector("#first");
  // first.addEventListener("click", (e) => {
  //   console.log(e.target, e.currentTarget)
  //     debugger
  // })
  // const second = document.querySelector("#second");
  // second.addEventListener("click", (e) => {
  //     debugger
  // })
  const ol = document.querySelector("ol");
  // ol.addEventListener("click", (e) => {
  //   console.log(e.target, e.currentTarget)
  //     debugger
  // })
  const orderedFirst = document.querySelector("#ordered-first");
  // orderedFirst.addEventListener("click", (e) => {
  //   console.log(e.target, e.currentTarget)
  //     debugger
  // })
});

// Add an html div that is 100px by 100px and the color red.
// When I click the div set the square to be blue.

// Challenge -
//   When you hover over the h1 tag change the text to be your name
//  Bonus when you move your mouse off the h1 the text returns to its original

// Make a p tag on the page that shows the x y coordiantes
// of the mouse at all times.
