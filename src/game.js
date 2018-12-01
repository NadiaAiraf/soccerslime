const Game = function Game(ball, canvas) {
  this.ball = ball
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
  this.ball.drawBall();
};

Game.prototype.checkForCollisions = function () {
  if (this.ball.yPosition > 600 && this.ball.yVelocity > 0) {
    this.ball.groundCollision();
  }
  if ((this.ball.xPosition > 900 && this.ball.xVelocity > 0) || (this.ball.xPosition < 0 && this.ball.xVelocity < 0)) {
    this.ball.wallCollision();
  }
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Game;
}
