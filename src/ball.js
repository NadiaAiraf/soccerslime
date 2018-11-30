const Ball = function Ball() {
  this.xPosition = 450
  this.yPosition = 300
  this.xVelocity = 1
  this.yVelocity = 1
  this.xAcceleration = 1
  this.yAcceleration = 1
}

Ball.prototype.move = function () {
  this.updateVelocity();
  this.xPosition += this.xVelocity;
  this.yPosition += this.yVelocity;
};

Ball.prototype.updateVelocity = function () {
  this.xVelocity += this.xAcceleration;
  this.yVelocity += this.yAcceleration;
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Ball;
}
