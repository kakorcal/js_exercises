const assert = require('assert');
const path = require('path');
const rectangleArea = require(path.resolve('src/prompts', '1_rectangle_area'));

describe('1_rectangle_area', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof rectangleArea, 'function');
  });

  it('should output the area of the rectangle based on the cartesian grid', ()=>{
    assert.strictEqual(rectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]), 4);
    assert.strictEqual(rectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]), 1);
    assert.strictEqual(rectangleArea(["(0 0)","(3 0)","(0 2)","(3 2)"]), 6);
    assert.strictEqual(rectangleArea(["(-1 -1)","(0 0)","(-1 0)","(0 -1)"]), 1);
    assert.strictEqual(rectangleArea(["(-2 -2)","(0 0)","(-2 0)","(0 -2)"]), 4);
    assert.strictEqual(rectangleArea(["(0 0)","(0 0)","(0 0)","(0 0)"]), 0);
  });
});