const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {

  let turn;
  let card

  beforeEach(() => {
    turn = new Turn('object', card);
    card = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('Should be an instance Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('Should be able to make a guess at each turn', () => {
    expect(turn.guess).to.equal('object')
  })

  it('Should use a card from the deck on each turn', () => {
    expect(turn.currentCard).to.deep.equal(card);
  })

  it('Should be able to return the guess made', () => {
    let guess = turn.returnGuess()

    expect(guess).to.equal('object')
  })

  it('Should be a ble to return the card used on the turn', () => {
    let cardUsed = turn.returnCard()

    expect(cardUsed).to.deep.equal(card)
  })
})