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

    it('stops the ball if velocity goes too lower', () => {
      ball.yVelocity = 0.05
      ball.groundCollision();
      expect(ball.yVelocity).toEqual(0)
    })
  })

  describe('wallCollision', () => {
    it('reverses the xVelocity', () => {
      var initialVelocity = ball.xVelocity;
      ball.wallCollision();
      expect(ball.xVelocity).toEqual(-initialVelocity*0.9)
    })
  })

  describe('smileyCollision', () => {
    it('takes 2 parameters and makes thme the new x/y velocities', () => {
      yVel = 2;
      xVel = 3;
      ball.smileyCollision(xVel, yVel);
      expect(ball.yVelocity).toEqual(2)
      expect(ball.xVelocity).toEqual(3)
    })
  })

});
