const assert = require('assert');
const path = require('path');
const BinaryReversal = require(path.resolve('src/prompts', '40_binary_reversal'));

/*
  Input:"213"
  Output:"171"

  Input:"4567"
  Output:"60296"
*/

describe('40_binary_reversal', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof BinaryReversal, 'function');
  });

  it('should return the value of the reversed binary number', ()=>{
    assert.strictEqual(BinaryReversal('213'), '171');
    assert.strictEqual(BinaryReversal('4567'), '60296');
    assert.strictEqual(BinaryReversal('47'), '244');
  });
});