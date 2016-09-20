const assert = require('assert');
const path = require('path');
const FirstReverse = require(path.resolve('src/prompts', '01_first_reverse'));

describe('1_first_reverse', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof FirstReverse, 'function');
  });

  it('should return a string in reversed order', ()=>{
    assert.strictEqual(FirstReverse('coderbyte'), 'etybredoc');
    assert.strictEqual(FirstReverse('I Love Code'), 'edoC evoL I');
  });
});