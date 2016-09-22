const assert = require('assert');
const path = require('path');
const ArrayMatching = require(path.resolve('src/prompts', '39_array_matching'));

/*
  Input:"[5, 2, 3]", "[2, 2, 3, 10, 6]"
  Output:"7-4-6-10-6"

  Input:"[1, 2, 1]", "[2, 1, 5, 2]"
  Output:"3-3-6-2"
*/

describe('39_array_matching', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ArrayMatching, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]), "7-4-6-10-6");
    assert.strictEqual(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]), "3-3-6-2");
    assert.strictEqual(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]), "6-4-13-17");
  });
});