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
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Game;
}
