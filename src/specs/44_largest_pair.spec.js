const assert = require('assert');
const path = require('path');
const LargestPair = require(path.resolve('src/prompts', '44_largest_pair'));

/*
  Input:453857
  Output:85

  Input:363223311
  Output:63
*/

describe('44_largest_pair', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof LargestPair, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(LargestPair(453857), 85);
    assert.strictEqual(LargestPair(363223311), 63);
    assert.strictEqual(LargestPair(4759472), 94);
    assert.strictEqual(LargestPair(47), 47);
  });
});