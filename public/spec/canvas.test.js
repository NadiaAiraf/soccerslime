const Canvas = require('../src/canvas.js')

describe('Canvas', () => {
  beforeEach(() => {
    stubContext = {
      clearRect: jest.fn(),
      beginPath: jest.fn(),
      rect: jest.fn(),
      fill: jest.fn(),
      closePath: jest.fn(),
    }
    canvas = new Canvas(stubContext)
  })

  describe('clearCanvas', () => {
    it('clears the canvas rectangle', () => {
      canvas.clearCanvas();
      expect(stubContext.clearRect).toHaveBeenCalledTimes(1);
    })
  })
})
