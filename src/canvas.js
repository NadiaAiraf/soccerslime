const Canvas = function Canvas(ctx) {
  this.ctx = ctx
}

Canvas.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, 900, 600);
  this.ctx.beginPath();
  this.ctx.rect(0, 590, 900, 10);
  this.ctx.fillStyle = '#555555';
  this.ctx.fill();
  this.ctx.closePath();

};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Canvas;
}
