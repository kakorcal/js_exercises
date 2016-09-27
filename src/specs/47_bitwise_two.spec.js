const assert = require('assert');
const path = require('path');
const BitwiseTwo = require(path.resolve('src/prompts', '47_bitwise_two'));

/*
  Input:"100", "000"
  Output:"000"

  Input:"10100", "11100"
  Output:"10100"
*/

describe('47_bitwise_two', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof BitwiseTwo, 'function');
  });

  it('should return a bitwise AND operated string', ()=>{
    assert.strictEqual(BitwiseTwo(["100", "000"]), '000');
    assert.strictEqual(BitwiseTwo(["10100", "11100"]), '10100');
    assert.strictEqual(BitwiseTwo(["10111", "01101"]), '00101');
  });
});