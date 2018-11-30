const Game = function Game(ball) {
  this.ball = ball
  this.leftPressed = false;
  this.rightPressed = false;
  this.upPressed = false;
}

Game.prototype.runGame = function () {
  this.ball.move()
};


if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Game;
}
