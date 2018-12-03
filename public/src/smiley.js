const Smiley = function Smiley(ctx) {
  this.ctx = ctx;
  this.xPosition = 425;
  this.yPosition = 590;
  this.xVelocity = 1;
  this.yVelocity = 1;
  this.xAcceleration = 0;
  this.yAcceleration = 0.1;
}

Smiley.prototype.drawSmiley = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.xPosition, this.yPosition, 40, Math.PI, Math.PI*2, false)
  this.ctx.fillStyle = "#aa0251";
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.beginPath();
  this.ctx.arc(this.xPosition+20, this.yPosition-25, 6, 0, Math.PI*2, true)
  this.ctx.fillStyle = "#FFFFFF";
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.beginPath();
  this.ctx.arc(this.xPosition+20, this.yPosition-25, 3, 0, Math.PI*2, true)
  this.ctx.fillStyle = "#000000";
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.beginPath();
  this.ctx.arc(this.xPosition+22, this.yPosition-46,40, Math.PI*(0.35), Math.PI*(0.6),false)
  this.ctx.strokeStyle = "rgba(255,255,255)";
  this.ctx.lineWidth = 3;
  this.ctx.stroke();
  this.ctx.closePath();
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Smiley;
}
