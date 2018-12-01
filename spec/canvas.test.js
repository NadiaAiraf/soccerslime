const Canvas = require('../src/canvas.js')

describe('Canvas', () => {
  beforeEach(() => {
    stubContext = {
      clearRect: jest.fn(),
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
