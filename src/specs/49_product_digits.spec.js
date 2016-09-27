const assert = require('assert');
const path = require('path');
const ProductDigits = require(path.resolve('src/prompts', '49_product_digits'));

/*
  Input:6
  Output:2

  Input:23
  Output:3
*/

describe('49_product_digits', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ProductDigits, 'function');
  });

  it('should return how many digits are required to reach the product of the input', ()=>{
    assert.strictEqual(ProductDigits(6), 2);
    assert.strictEqual(ProductDigits(23), 3);
    assert.strictEqual(ProductDigits(24), 2);
    assert.strictEqual(ProductDigits(90), 3);
  });
});