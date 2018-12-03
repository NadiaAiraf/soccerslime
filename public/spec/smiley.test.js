const Smiley = require('../src/smiley.js')

describe('Smiley', () => {
  beforeEach(() => {
    stubContext = {
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      closePath: jest.fn(),
      stroke: jest.fn(),
    }
    smiley = new Smiley(stubContext);
  })

  describe('drawSmiley', () => {
    it('draws a smiley on the page', () => {
      smiley.drawSmiley();
      expect(stubContext.fill).toHaveBeenCalledTimes(3);
      expect(stubContext.stroke).toHaveBeenCalledTimes(1);
      expect(stubContext.arc).toHaveBeenCalledTimes(4);
      expect(stubContext.closePath).toHaveBeenCalledTimes(4);
      expect(stubContext.beginPath).toHaveBeenCalledTimes(4);
    })
  })
})
