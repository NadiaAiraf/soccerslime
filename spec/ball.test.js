const Ball = require('../src/ball.js')

describe('Ball', () => {
  beforeEach(() => {
    stubContext = {
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
    }
    ball = new Ball(stubContext)
  });

  describe('drawBall', () => {
    it('draws a ball on our canvas', () => {
      ball.drawBall();
      expect(stubContext.beginPath).toHaveBeenCalledTimes(1);
      expect(stubContext.arc).toHaveBeenCalledTimes(1);
      expect(stubContext.fill).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('drawBall', () => {
    it('draws a ball on our canvas', () => {
      ball.drawBall();
      expect(stubContext.beginPath).toHaveBeenCalledTimes(1);
      expect(stubContext.arc).toHaveBeenCalledTimes(1);
      expect(stubContext.fill).toHaveBeenCalledTimes(1);
    });
  });

});
