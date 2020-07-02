const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[this.turns])
    turn.evaluateGuess()
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck[this.turns].id)
    }
    this.turns++;
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    var percent = ((this.turns - this.incorrectGuesses.length) / this.turns * 100)

    return Math.floor(percent);
  }

  endRound() {
    let percent = this.calculatePercentCorrect()
    return `** Round over! ** You answered ${percent}% of the questions correctly!`
  }
}

module.exports = Round;