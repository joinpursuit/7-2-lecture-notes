// conditionals 

let moving = true;
let shouldBeMoving = true;

// if (moving) {
//   if (shouldBeMoving) {
//     console.log("No problem! This should be moving and it does!");
//   } else {
//     console.log("OK, time for some duct tape!");
//   }
// } else {
//   if (shouldBeMoving) {
//     console.log("Ok, some WD-40 should get this going!");
//   } else {
//     console.log("No problem! This should NOT be moving and it does not!");
//   }
// }

// console.log(
//   moving 
//     ? shouldBeMoving
//       ? "No problem! This should be moving and it does!"
//       : "OK, time for some duct tape!"
//     : shouldBeMoving 
//       ? "Ok, some WD-40 should get this going!"
//       : "No problem! This should NOT be moving and it does not!"
// )


// equality 
// if (moving == true)
// if (moving === true)
// if (moving)

const fatArrowFunc = () => {};
function functionKeyword() {};
function ConstructorFunc() {};

window || (window = {});
// window.ConstructorFunc = ConstructorFunc;
// window.fatArrowFunc = fatArrowFunc;
// window.functionKeyword = functionKeyword;

// functions 
const fixIt = (moving, shouldBeMoving) => {
  if (moving) {
    if (shouldBeMoving) {
      console.log("No problem! This should be moving and it does!");
    } else {
      console.log("OK, time for some duct tape!");
    }
  } else {
    if (shouldBeMoving) {
      console.log("Ok, some WD-40 should get this going!");
    } else {
      console.log("No problem! This should NOT be moving and it does not!");
    }
  }
};

// fixIt(true, true);
// fixIt(true, false);
// fixIt(false, false);
// fixIt(false, true);

// loops 
const anonymousFunc = function() {
  let secretPhrase = prompt('Enter the secret');
  
  while (secretPhrase != 'open sesame') {
    secretPhrase = prompt('Nope! Guess again!');
  }
  
  alert('you guessed it! Nice job!');
}
// IIFE
// immediately invoked function expression 


function nameFinder (name, list) {
  let foundName = false;
  
  // list.forEach(el => {
  //   if (el === name) {
  //     foundName = true;
  //   }
  // });

  for (let i = 0; i < list.length; i++) {
    if (list[i] === name) {
      return true;
    }
  }
  return false;

  return foundName;
}
const l = ['mashu', 'tim','mashu', 'gigi','mashu', 'tim','mashu', 'tim','mashu', 'tim','mashu', 'tim', 'mashu', 'tim'];
const name = 'gigi';

function testingFor() {
  console.log("you only have three guesses, be careful with your choices");
  
  let access = false;
  
  for (let i = 3; i >= 1; i--) {
    console.log(i);
    let password = prompt("what is the password");
    if (password === "password1234") {
      access = true;
      // break;
      // return;
      continue;
    }

    if (i === 3) {
      alert(`You only have 2 guesses left`);
    } else if (i === 2) {
      alert("You only have 1 guess left!");
    }
  }

  if (access) {
    alert("Congratulations! You now have access to your account");
  } else {
    alert("Sorry, you have lost access forever");
  }
}
// testingFor();