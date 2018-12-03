const Game = require('../src/game.js')

describe('Game', () => {
  beforeEach(() => {
    stubBall = {
      move: jest.fn(),
      drawBall: jest.fn(),
      groundCollision: jest.fn(),
      wallCollision: jest.fn(),
      smileyCollision: jest.fn(),
    }
    stubCanvas = {
      clearCanvas: jest.fn(),
    }
    stubSmiley = {
      drawSmiley: jest.fn(),
    }
    game = new Game(stubBall, stubCanvas, stubSmiley);
  })

  describe('runGame', () => {
    it('calls two of ball functions', () => {
      game.runGame();
      expect(stubBall.move).toHaveBeenCalledTimes(1);
      expect(stubBall.drawBall).toHaveBeenCalledTimes(1);
    })
  })

  describe('checkForCollisions', () => {
    it('calls groundCollision when position is lower than the ground', () => {
      game.ball.yPosition = 700
      game.ball.yVelocity = 1
      game.checkForCollisions();
      expect(game.ball.groundCollision).toHaveBeenCalledTimes(1);
    })
  })

  describe('checkForCollisions', () => {
    it('calls wallCollision when ball hits side wall', () => {
      game.ball.xPosition = 950
      game.ball.xVelocity = 1
      game.checkForCollisions();
      expect(game.ball.wallCollision).toHaveBeenCalledTimes(1);
    })

    it('calls wallCollision when ball hits side wall', () => {
      game.ball.xPosition = -10
      game.ball.xVelocity = -1
      game.checkForCollisions();
      expect(game.ball.wallCollision).toHaveBeenCalledTimes(1);
    })
  })

  describe('isSmileyCollision', () => {
    it('returns true if a ball is within range of the paddle', () => {
      game.ball.xPosition = 400
      game.ball.yPosition = 200
      game.smiley.xPosition = 410
      game.smiley.yPosition = 208
      game.checkForCollisions();
      expect(stubBall.smileyCollision).toHaveBeenCalledTimes(1)
      expect(game.smileyCollision()).toEqual(true)
    })

    it('returns false if a ball is not within range of the paddle', () => {
      game.ball.xPosition = 200
      game.ball.yPosition = 200
      game.smiley.xPosition = 410
      game.smiley.yPosition = 208
      expect(game.smileyCollision()).toEqual(false)
    })
  })

})
