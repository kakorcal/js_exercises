const assert = require('assert');
const path = require('path');
const CheckNums = require(path.resolve('src/prompts', '8_check_nums'));

/*
  Input:3 & num2 = 122
  Output:"true"

  Input:67 & num2 = 67
  Output:"-1"
*/

describe('8_check_nums', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof CheckNums, 'function');
  });

  it('should compare numbers correctly', ()=>{
    assert.strictEqual(CheckNums(3, 122), 'true');
    assert.strictEqual(CheckNums(67, 67), '-1');
  });
});