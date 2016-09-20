const assert = require('assert');
const path = require('path');
const FNAME = require(path.resolve('src/prompts', 'FCN'));

/*


*/

describe('FCN', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof FNAME, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(typeof FNAME, 'function');
    assert.strictEqual(typeof FNAME, 'function');
  });
});