const assert = require('assert');
const path = require('path');
const ChangingSequence = require(path.resolve('src/prompts', '31_changing_sequence'));

/*
  Input:-4, -2, 9, 10
  Output:-1

  Input:5, 4, 3, 2, 10, 11
  Output:3
*/

describe('31_changing_sequence', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ChangingSequence, 'function');
  });

  it('should return the index of where the sequence changes', ()=>{
    assert.strictEqual(ChangingSequence([5, 4, 3, 2, 10, 11]), 3);
    assert.strictEqual(ChangingSequence([-4, -2, 9, 10]), -1);
    assert.strictEqual(ChangingSequence([1, 2, 4, 6, 4, 3, 1]), 3);
  });
});