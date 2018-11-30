const Game = require('../src/game.js')

describe('Game', () => {
  beforeEach(() => {
    stubBall = {
      move: jest.fn(),
      drawBall: jest.fn(),
      groundCollision: jest.fn(),
    }
    game = new Game(stubBall);
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

})
