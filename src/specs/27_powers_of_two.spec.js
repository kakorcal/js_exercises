const assert = require('assert');
const path = require('path');
const PowersOfTwo = require(path.resolve('src/prompts', '27_powers_of_two'));

/*
  Input:4
  Output:"true"

  Input:124
  Output:"false"
*/

describe('27_powers_of_two', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof PowersOfTwo, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(PowersOfTwo(4), 'true');
    assert.strictEqual(PowersOfTwo(124), 'false');
    assert.strictEqual(PowersOfTwo(16), 'true');
    assert.strictEqual(PowersOfTwo(22), 'false');
  });
});