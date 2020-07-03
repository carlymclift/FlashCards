const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data')
const Round = require('../src/Round');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', () => {

  let game, prototypeQuestions;
    
  beforeEach(() => {
    game = new Game()
    prototypeQuestions = data.prototypeData
  })

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  })

  it('Should be an instance of Deck', () => {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('Should keep track of the current round', () => {
    expect(game.currentRound).to.equal(undefined);
  })

  it('should keep track of the current round', function() {
    const game = new Game()

    expect(game.currentRound).to.equal(undefined)
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })

  it('should create all game cards', () => {
    game.start()
    expect(game.currentRound.deck[0]).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
  });

  it('should create a new deck', () => {
    game.start()
    expect(game.currentRound.deck).to.deep.equal(prototypeQuestions)
  });

  it('should start the game with a new round', () => {
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })

  it('should start the game with a new set of cards', () => {
    game.start()
    expect(game.currentRound.deck[0]).to.be.an.instanceOf(Card);
  })
})