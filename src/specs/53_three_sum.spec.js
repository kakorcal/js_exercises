const assert = require('assert');
const path = require('path');
const ThreeSum = require(path.resolve('src/prompts', '53_three_sum'));

/*
  Input:10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2
  Output:"true"

  Input:12, 3, 1, -5, -4, 7
  Output:"false"
*/

xdescribe('53_three_sum', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ThreeSum, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]), 'true');
    assert.strictEqual(ThreeSum([12, 3, 1, -5, -4, 7]), 'false');
  });
});