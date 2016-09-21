const assert = require('assert');
const path = require('path');
const NumberAddition = require(path.resolve('src/prompts', '25_number_addition'));

/*
  Input:"75Number9"
  Output:84

  Input:"10 2One Number*1*"
  Output:13

*/

describe('25_number_addition', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof NumberAddition, 'function');
  });

  it('should return the sum of the string', ()=>{
    assert.strictEqual(NumberAddition('75Number9'), 84);
    assert.strictEqual(NumberAddition('10 2One Number*1*'), 13);
    assert.strictEqual(NumberAddition('88Hello 3World!'), 91);
    assert.strictEqual(NumberAddition('5Hello 5'), 10);
  });
});