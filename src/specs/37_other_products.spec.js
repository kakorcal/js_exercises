const assert = require('assert');
const path = require('path');
const OtherProducts = require(path.resolve('src/prompts', '37_other_products'));

/*
  Input:1,4,3
  Output:"12-3-4"

  Input:3,1,2,6
  Output:"12-36-18-6"
*/

describe('37_other_products', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof OtherProducts, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(OtherProducts([1,4,3]), "12-3-4");
    assert.strictEqual(OtherProducts([3,1,2,6]), "12-36-18-6");
    assert.strictEqual(OtherProducts([1, 2, 3, 4, 5]), "120-60-40-30-24");
  });
});