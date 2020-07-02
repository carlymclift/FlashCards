const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card')

describe('Turn', () => {

  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
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