const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card')

describe('Turn', () => {

  let card1, card2, card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    card3 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  })

  it('Should be an instance Turn', () => {
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('Should be able to hold the all the cards', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('Should be able to return the guess made', () => {
    let countCards = deck.countCards()

    expect(countCards).to.equal(3)
  })
})