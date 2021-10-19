// conditionals 

let moving = true;
let shouldBeMoving = true;

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


// equality 
// if (moving == true)
// if (moving === true)
// if (moving)


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

fixIt(true, true);
fixIt(true, false);
fixIt(false, false);
fixIt(false, true);

// loops 
function testingWhile() {
  let secretPhrase = prompt('Enter the secret');
  
  while (secretPhrase != 'open sesame') {
    secretPhrase = prompt('Nope! Guess again!');
  }
  
  alert('you guessed it! Nice job!');
}

function testingFor() {
  console.log("you only have three guesses, be careful with your choices");
  
  let access = false;
  
  for (let i = 3; i >= 1; i--) {
    let password = prompt("what is the password");
    
    if (password === "password1234") {
      access = true;
      break;
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