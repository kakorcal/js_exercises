const assert = require('assert');
const path = require('path');
const OverlappingRanges = require(path.resolve('src/prompts', '32_overlapping_ranges'));

/*
  Input:5,11,1,5,1
  Output:true

  Input:1,8,2,4,4
  Output:false
*/

describe('32_overlapping_ranges', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof OverlappingRanges, 'function');
  });

  it('should determine if the ranges overlap', ()=>{
    assert.strictEqual(OverlappingRanges([5,11,1,5,1]), true);
    assert.strictEqual(OverlappingRanges([1,5,5,11,1]), true);
    assert.strictEqual(OverlappingRanges([1,8,2,4,4]), false);
    assert.strictEqual(OverlappingRanges([2,4,1,8,4]), false);
    assert.strictEqual(OverlappingRanges([4,10,2,6,3]), true);
    assert.strictEqual(OverlappingRanges([1,2,1,3,1]), false);
    assert.strictEqual(OverlappingRanges([1,10,9,10,1]), false);
    assert.strictEqual(OverlappingRanges([4,10,5,8,2]), false);
  });
});