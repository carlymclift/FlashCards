const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {

  let round, deck, card1, card2, card3, turn1, turn2, turn3;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
}) 

  it('Should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round)
  })

  it('Should have a deck of cards, turns and inncorrect guesses', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0);
  })

  it('should have a place for incorrect answers to be stored', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should return the current card in play', function() {
    let currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
  })

  it('should to be able to update the number of turns when a guess is made', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
  })

  it('should evaluate guess and store it, if the guess is incorrect', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
    round.takeTurn('pug')
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should give feedback about the answer being correct or incorrct', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
    expect(round.takeTurn('pug')).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it('should calculate the percent of correct answers', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbadder');
    round.takeTurn('Fitzgerald');

    let percent = round.calculatePercentCorrect()

    expect(percent).to.equal(33);
  })

  it('should end the round after the answers are recorded', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbadder');
    round.takeTurn('Fitzgerald');

    let percent = round.calculatePercentCorrect()
    let end = round.endRound()

    expect(percent).to.equal(33);
    expect(end).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  })
})
