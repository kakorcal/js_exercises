const assert = require('assert');
const path = require('path');
const TwoSum = require(path.resolve('src/prompts', '46_two_sum'));

/*
  Input:17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7
  Output:6,11 10,7 15,2

  Input:7, 6, 4, 1, 7, -2, 3, 12
  Output:6,1 4,3
*/

describe('46_two_sum', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof TwoSum, 'function');
  });

  it('should return a string with a two sum of the first array element', ()=>{
    assert.strictEqual(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]), '6,11 10,7 15,2');
    assert.strictEqual(TwoSum([7, 3, 5, 2, -4, 8, 11]), '5,2 -4,11');
    assert.strictEqual(TwoSum([7, 6, 4, 1, 7, -2, 3, 12]), '6,1 4,3');
    assert.strictEqual(TwoSum([6, 2]), -1);
    assert.strictEqual(TwoSum([100, 90, 90, 90, 90, 11]), -1);
    assert.strictEqual(TwoSum([4, 5, 2, 1]), -1);
  });
});