const Game = require("./game");
// has variables / properties
// secretWord = ""
// board = []
// guessesRemaining = 10
// guessedLetters = []
// methods
//   addGuessedLetter(letter)
//   reset()
//   updateBoard(letter)
//   didWin()
//   secretWordIncludes(letter)
//   decrementGuessesRemaining()
//   guessIsValid(letter)
//   getValidLetterGuess()
//   assignRandomSecretWord()
//   makeBoard()
//   displayBoard()
//   displayState()
//   isGameOver()
//   displayWinOrLose()
//   playAgain(startGame)

function startGame() {
  const game = new Game();

  game.assignRandomSecretWord();
  game.makeBoard();

  while (!game.isGameOver()) {
    game.takeTurn();
    // console.clear();
    // game.displayState();

    // const guessedLetter = game.getValidLetterGuess();
    // game.addGuessedLetter(guessedLetter);

    // if(game.secretWordIncludes(guessedLetter)) {
    //     game.updateBoard(guessedLetter)
    // } else {
    //     game.decrementGuessesRemaining();
    // }
  }

  game.displayWinOrLose();
  game.playAgain(startGame);
}
startGame();

// 3 ways to invoke a function..
// there is function style. function startGame() {}   startGame();
// method style. arr.pop() is method style.
// constructor style new NameOfClass();
