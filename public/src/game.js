const Game = function Game(ball, canvas, smiley) {
  this.ball = ball
  this.canvas = canvas
  this.smiley = smiley
  this.leftPressed = false;
  this.rightPressed = false;
  this.upPressed = false;
  that = this;
}

Game.prototype.runGame = function () {
  that.checkForCollisions();
  this.ball.move()
  that.drawThings();
};

Game.prototype.drawThings = function () {
  this.canvas.clearCanvas();
  this.ball.drawBall();
  this.smiley.drawSmiley();
};

Game.prototype.checkForCollisions = function () {
  if (this.ball.yPosition > 582 && this.ball.yVelocity > 0) {
    this.ball.groundCollision();
  }
  if ((this.ball.xPosition > 892 && this.ball.xVelocity > 0) || (this.ball.xPosition < 8 && this.ball.xVelocity < 0)) {
    this.ball.wallCollision();
  }
  if (this.smileyCollision()) {
    if (that.ball.xVelocity = 0) {
      that.ball.xVelocity = 0.001
    }
    balVelMagnitude = Math.sqrt(this.ball.xVelocity * this.ball.xVelocity + this.ball.yVelocity * this.ball.yVelocity) * 0.8
    console.log('ball magnitude: ' + balVelMagnitude)
    smileyGrad = (that.ball.yPosition - that.smiley.yPosition)/(that.ball.xPosition - that.smiley.xPosition)
    console.log('smiley grad: ' + smileyGrad);
    collisionAngle = Math.atan(smileyGrad)
    newXVelocity = -(-(Math.cos(2*collisionAngle)*that.ball.xVelocity) + (Math.sin(2*collisionAngle)*that.ball.yVelocity))
    newYVelocity = (Math.sin(2*collisionAngle)*that.ball.xVelocity) + (Math.cos(2*collisionAngle)*that.ball.yVelocity)
    this.ball.smileyCollision(newXVelocity,newYVelocity);
  }
};

Game.prototype.smileyCollision = function () {
  BallPosition = Math.sqrt(Math.pow(that.ball.xPosition - that.smiley.xPosition,2)+Math.pow(that.ball.yPosition - that.smiley.yPosition,2))
  if (BallPosition < 48 && that.ball.hit) {
    that.ball.hit = false;
    return true
  } else {
    return false
  }
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Game;
}
