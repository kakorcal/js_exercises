const assert = require('assert');
const path = require('path');
const SimpleAdding = require(path.resolve('src/prompts', '5_simple_adding'));

/*
  Input  : 12
  Output : 78

  Input  : 140
  Output : 9870
*/

describe('5_simple_adding', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof SimpleAdding, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(SimpleAdding(12), 78);
    assert.strictEqual(SimpleAdding(140), 9870);
  });
});