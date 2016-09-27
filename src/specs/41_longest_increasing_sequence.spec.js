const assert = require('assert');
const path = require('path');
const LongestIncreasingSequence = require(path.resolve('src/prompts', '41_longest_increasing_sequence'));

/*
  Input:9, 9, 4, 2
  Output:1

  Input:10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90
  Output:7
*/

xdescribe('41_longest_increasing_sequence', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof LongestIncreasingSequence, 'function');
  });

  it('should return the length of the longest sequence', ()=>{
    assert.strictEqual(LongestIncreasingSequence([9, 9, 4, 2]), 1);
    assert.strictEqual(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]), 7);
    assert.strictEqual(LongestIncreasingSequence([4, 3, 5, 1, 6]), 3);
  });
});