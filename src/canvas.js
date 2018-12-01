const Canvas = function Canvas(ctx) {
  this.ctx = ctx
}

Canvas.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, 900, 600);
};

if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Canvas;
}
