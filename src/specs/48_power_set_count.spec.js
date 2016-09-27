const assert = require('assert');
const path = require('path');
const PowerSetCount = require(path.resolve('src/prompts', '48_power_set_count'));

/*
  Input:1, 2, 3, 4
  Output:16

  Input:5, 6
  Output:4
*/

describe('48_power_set_count', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof PowerSetCount, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(PowerSetCount([1, 2, 3, 4]), 16);
    assert.strictEqual(PowerSetCount([5, 6]), 4);
    assert.strictEqual(PowerSetCount([1, 2, 3]), 8);
  });
});