const assert = require('assert');
const path = require('path');
const TimeConvert = require(path.resolve('src/prompts', '9_time_convert'));

/*
  Input:126
  Output:"2:6"

  Input:45
  Output:"0:45"
*/

describe('9_time_convert', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof TimeConvert, 'function');
  });

  it('should convert input into time', ()=>{
    assert.strictEqual(TimeConvert(126), '2:6');
    assert.strictEqual(TimeConvert(45), '0:45');
    assert.strictEqual(TimeConvert(63), '1:3');
  });
});