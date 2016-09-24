const assert = require('assert');
const path = require('path');
const Superincreasing = require(path.resolve('src/prompts', '33_super_increasing'));

/*
  Input:1,2,3,4
  Output:"false"

  Input:1,2,5,10
  Output:"true"
*/

describe('33_super_increasing', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof Superincreasing, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(Superincreasing([1,2,3,4]), 'false');
    assert.strictEqual(Superincreasing([1,2,5,10]), 'true');
    assert.strictEqual(Superincreasing([1,3,6,13,54]), 'true');
    assert.strictEqual(Superincreasing([3,3]), 'false');
    assert.strictEqual(Superincreasing([0,0,0,2,2]), 'false');
  });
});