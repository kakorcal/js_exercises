const assert = require('assert');
const path = require('path');
const FirstFactorial = require(path.resolve('src/prompts', '02_first_factorial'));

/*
  Input  : 4
  Output : 24

  Input  : 8
  Output : 40320
*/

describe('2_first_factorial', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof FirstFactorial, 'function');
  });

  it('should return the factorial given an input', ()=>{
    assert.strictEqual(FirstFactorial(4), 24);
    assert.strictEqual(FirstFactorial(8), 40320);
  });
});