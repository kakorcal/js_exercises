const assert = require('assert');
const path = require('path');
const ArrayAdditionI = require(path.resolve('src/prompts', '17_array_additionI'));

/*
  Input:5,7,16,1,2
  Output:"false"

  Input:3,5,-1,8,12
  Output:"true"
*/

xdescribe('17_array_additionI', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ArrayAdditionI, 'function');
  });

  it('should determine if there is a subset that adds up to the largest number in the array', ()=>{
    assert.strictEqual(ArrayAdditionI([5,7,16,1,2]), 'false');
    assert.strictEqual(ArrayAdditionI([3,5,-1,8,12]), 'true');
    assert.strictEqual(ArrayAdditionI([4, 6, 23, 10, 1, 3]), 'true');
  });
});