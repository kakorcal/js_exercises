const assert = require('assert');
const path = require('path');
const BasicRomanNumerals = require(path.resolve('src/prompts', '51_basic_roman_numerals'));

/*
  Input:"IV"
  Output:4

  Input:"XLVI"
  Output:46
*/

describe('51_basic_roman_numerals', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof BasicRomanNumerals, 'function');
  });

  it('should convert the roman numeral into a number', ()=>{
    assert.strictEqual(BasicRomanNumerals("IV"), 4);
    assert.strictEqual(BasicRomanNumerals("XLVI"), 46);
    assert.strictEqual(BasicRomanNumerals("XXIV"), 24);
    assert.strictEqual(BasicRomanNumerals("XIX"), 19);
    assert.strictEqual(BasicRomanNumerals("CCVII"), 207);
    assert.strictEqual(BasicRomanNumerals("MLXVI"), 1066);
  });
});