const assert = require('assert');
const path = require('path');
const AdditivePersistence = require(path.resolve('src/prompts', '28_additive_persistence'));

/*
  Input:4
  Output:0

  Input:19
  Output:2
*/

describe('28_additive_persistence', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof AdditivePersistence, 'function');
  });

  it('should return the count of additive persistence', ()=>{
    assert.strictEqual(AdditivePersistence(4), 0);
    assert.strictEqual(AdditivePersistence(19), 2);
    assert.strictEqual(AdditivePersistence(2718), 2);
  });
});