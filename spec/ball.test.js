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

  describe('move', () => {
    it('changes the xPosition by the xVelocity ', () => {
      var initialPosition = ball.xPosition;
      var initialVelocity = ball.xVelocity;
      ball.move();
      expect(ball.xPosition).toEqual(initialPosition + initialVelocity);
    });

    it('changes the yPosition by the yVelocity ', () => {
      var initialPosition = ball.yPosition;
      var initialVelocity = ball.yVelocity;
      ball.move();
      expect(ball.yPosition).toEqual(initialPosition + initialVelocity);
    });
  });

  describe('groundCollision', () => {
    it('reverses and lowers the yVelocity', () => {
      var initialVelocity = ball.yVelocity;
      ball.groundCollision();
      expect(ball.yVelocity).toEqual(-initialVelocity*0.8)
    })
  })

});
