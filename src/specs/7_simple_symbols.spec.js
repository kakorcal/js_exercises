const assert = require('assert');
const path = require('path');
const SimpleSymbols = require(path.resolve('src/prompts', '7_simple_symbols'));

/*

Input  : "+d+=3=+s+"
Output : "true"

Input  : "f++d+"
Output : "false"

*/

describe('7_simple_symbols', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof SimpleSymbols, 'function');
  });

  it('should check to see if letters are surrounded by +', ()=>{
    assert.strictEqual(SimpleSymbols('+d+=3=+s+'), true);
    assert.strictEqual(SimpleSymbols('f++d+'), false);
    assert.strictEqual(SimpleSymbols('aaaa'), false);
    assert.strictEqual(SimpleSymbols('+z+z+z+'), true);
    assert.strictEqual(SimpleSymbols('+a='), false);
    assert.strictEqual(SimpleSymbols('2+a+a+'), true);
    assert.strictEqual(SimpleSymbols('+z+z+==+a+'), true);
    assert.strictEqual(SimpleSymbols('==a+'), false);
    assert.strictEqual(SimpleSymbols('b'), false);
  });
});