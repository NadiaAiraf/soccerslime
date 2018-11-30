const Game = require('../src/game.js')

describe('Game', () => {
  beforeEach(() => {
    stubBall = {
      move: jest.fn(),
      drawBall: jest.fn(),
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

})
