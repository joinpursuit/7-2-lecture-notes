const readLineSync = require("readline-sync");

// const name = readLineSync.question("What's your name?");
// console.log("hello " + name + " it's nice to meet you!")

// console.log("") // new line 

// if(readLineSync.keyInYN("Do you like soccer? ")) {
//     console.log("Yeah, Beckham is the best")
// } else {
//     console.log("I know and people this it's the football!")
// }
// you think of a number between 1 and 10000, I get 15 guesses you just too high or too low. 



const play = () => {
  console.log("Thank you for playing the ultimate guessing game.");
  console.log("Let's start with you picking a number between 1 and 10,000");
  console.log("If I guess your number in 15 guesses or less I win");
  console.log("If I don't, you win");
  console.log(
    "With each guess you have to tell me if I am too high or too low"
  );    
  if(readLineSync.keyInYN("Sound good? ")) {
      startGame();
  } else {
      leaveGame();
  }
}

const gameOver = (computerWin) => {
    if(computerWin) {
     console.log("I win");
     console.log("I WIN!!!");
     console.log("COMPUTERS WILL RISE UP AND DOMINATE THE EARTH!!!");       
    } else {
     console.log("Congrats, but don't get cocky. I'll win next time");       
    }

    if(readLineSync.keyInYN("Play again? ")) {
        console.clear();
        play();
    } else {
        leaveGame();
    }
}

const startGame = () => {
    console.log("Think of a number between 1 and 10,000")
    let guessCount = 15; 
    let bottom = 1;
    let top = 10_000;
    while(guessCount > 0) {
        const guess = Math.floor((bottom + top) / 2)
        console.log("my guess is ", guess);
        if(readLineSync.keyInYN("Am I right?")) {
            gameOver(true);
        } else {
            guessCount--;
            console.log("Yikes, I only have " + guessCount + " guesses left!")

            let highOrLow
            while(highOrLow !== "high" && highOrLow !== "low") {
                highOrLow = readLineSync.question("Was I too high or too low? \n");
                highOrLow = highOrLow.trim().toLowerCase();
                if(highOrLow !== "high" && highOrLow !== "low") {
                    console.log("NOT A VALID GUESS, MUST BE HIGH OR LOW!")
                }
            }
            console.log("Thanks I'll do better on my next guess")
            if(highOrLow === "high") {
                top = guess - 1; 
            } else {
                bottom = guess + 1; 
            }
        }
    }

    gameOver(false); // computer has lost 
}

const leaveGame = () => {
    console.log("Sad to see you go! Good luck in life!")
    process.exit();
}

// play();


function adventure() {
    let res = readLineSync.question("You're outside a building. would you like to go in or or a walk?")
    if(res === "in") {
        inBuilding()
    } else {
        goForWalk()
    }
}

function inBuilding() {
    let res;
    while(res !== "elevator" && res !== "stairs") {
        res = readLineSync.question("Elevator or stairs?").trim().toLowerCase();
    }
    if(res === "elevator") {
        inElevatorFunction()
    } else if(res === "stairs") {
        stairsFunction();
    }
}

// inBuilding();

function floorThree(){
    let weapons = ["sling shot", "bat", "pizza", "gun", "candlestick"];
    console.log("On the table you see a")
    for(let i = 0; i < weapons.length; i++) {
        console.log(weapons[i]);
    }
}

// floorThree();

function inElevatorFunction(){
    let resInt = readLineSync.questionInt("Which floor");
    console.log("Elevator is broken you go to floor 3");
    floorThree()
}

function stairsFunction(){}

function goForWalk(){}