const assert = require('assert');
const path = require('path');
const MeanMode = require(path.resolve('src/prompts', '22_mean_mode'));

/*
  Input:1, 2, 3
  Output:0

  Input:4, 4, 4, 6, 2
  Output:1
  
*/

describe('22_mean_mode', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof MeanMode, 'function');
  });

  it('should check if mode equals the mean', ()=>{
    assert.strictEqual(MeanMode([1, 2, 3]), 0);
    assert.strictEqual(MeanMode([4, 4, 4, 6, 2]), 1);
    assert.strictEqual(MeanMode([5, 3, 3, 3, 1]), 1);
  });
});