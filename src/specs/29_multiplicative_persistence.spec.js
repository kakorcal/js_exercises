const assert = require('assert');
const path = require('path');
const MultiplicativePersistence = require(path.resolve('src/prompts', '29_multiplicative_persistence'));

/*
  Input:4
  Output:0

  Input:25
  Output:2
*/

describe('29_multiplicative_persistence', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof MultiplicativePersistence, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(MultiplicativePersistence(4), 0);
    assert.strictEqual(MultiplicativePersistence(25), 2);
    assert.strictEqual(MultiplicativePersistence(39), 3);
  });
});