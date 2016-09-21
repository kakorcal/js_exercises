const assert = require('assert');
const path = require('path');
const DivisionStringified = require(path.resolve('src/prompts', '20_division_stringified'));

/*
  Input:5 & num2 = 2
  Output:"3"

  Input:6874 & num2 = 67
  Output:"103"
*/

describe('20_division_stringified', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof DivisionStringified, 'function');
  });

  it('should return a stringified number', ()=>{
    assert.strictEqual(DivisionStringified(5, 2), '3');
    assert.strictEqual(DivisionStringified(6874, 67), '103');
    assert.strictEqual(DivisionStringified(2, 3), '1');
    assert.strictEqual(DivisionStringified(123456789, 10000), '12,346');
  });
});