const assert = require('assert');
const path = require('path');
const BitwiseOne = require(path.resolve('src/prompts', '36_bitwise_one'));

/*
  Input:"100", "000"
  Output:"100"

  Input:"00011", "01010"
  Output:"01011"
*/

describe('36_bitwise_one', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof BitwiseOne, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(BitwiseOne(["100", "000"]), '100');
    assert.strictEqual(BitwiseOne(["00011", "01010"]), '01011');
    assert.strictEqual(BitwiseOne(["1001", "0100"]), '1101');
  });
});