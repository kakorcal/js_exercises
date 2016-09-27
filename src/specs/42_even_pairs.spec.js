const assert = require('assert');
const path = require('path');
const EvenPairs = require(path.resolve('src/prompts', '42_even_pairs'));

/*
  Input:"3gy41d216"
  Output:"true"

  Input:"f09r27i8e67"
  Output:"false"
*/

describe('42_even_pairs', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof EvenPairs, 'function');
  });

  it('should determine if an even pair exists in the string', ()=>{
    assert.strictEqual(EvenPairs("3gy41d216"), 'true');
    assert.strictEqual(EvenPairs("f09r27i8e67"), 'false');
    assert.strictEqual(EvenPairs("f178svg3k19k46"), 'true');
    assert.strictEqual(EvenPairs("7r5gg812"), 'true');
    assert.strictEqual(EvenPairs("abc"), 'false');
  });
});