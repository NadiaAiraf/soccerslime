const Ball = function Ball(ctx) {
  this.xPosition = 450;
  this.yPosition = 300;
  this.xVelocity = 1;
  this.yVelocity = 1;
  this.xAcceleration = 1;
  this.yAcceleration = 1;
  this.ctx = ctx;
}

Ball.prototype.drawBall = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.xPosition, this.yPosition, 8, 0, Math.PI*2, true)
  this.ctx.fillStyle = "#FFFF00";
  this.ctx.fill();
  this.ctx.closePath
};

Ball.prototype.move = function () {
  this.xPosition += this.xVelocity;
  this.yPosition += this.yVelocity;
  this.updateVelocity();
};

Ball.prototype.updateVelocity = function () {
  this.xVelocity += this.xAcceleration;
  this.yVelocity += this.yAcceleration;
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Ball;
}
