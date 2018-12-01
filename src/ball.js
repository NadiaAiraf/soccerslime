const Ball = function Ball(ctx) {
  this.xPosition = 450;
  this.yPosition = 300;
  this.xVelocity = 2;
  this.yVelocity = 1.5;
  this.xAcceleration = 0;
  this.yAcceleration = 0.1;
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

Ball.prototype.groundCollision = function() {
  this.yVelocity *= -0.8
  this.xVelocity *= 0.8
  if (this.yVelocity < 0.9 && this.yVelocity > -0.9) {
    this.yVelocity = 0;
  }
}

Ball.prototype.wallCollision = function() {
  this.xVelocity *= -0.9
}

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Ball;
}
