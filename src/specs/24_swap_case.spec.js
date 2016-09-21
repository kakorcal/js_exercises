const assert = require('assert');
const path = require('path');
const SwapCase = require(path.resolve('src/prompts', '24_swap_case'));

/*
  Input:"Hello-LOL"
  Output:"hELLO-lol"

  Input:"Sup DUDE!!?"
  Output:"sUP dude!!?"
*/

describe('24_swap_case', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof SwapCase, 'function');
  });

  it('should swap the cases of the string', ()=>{
    assert.strictEqual(SwapCase('Hello-LOL'), 'hELLO-lol');
    assert.strictEqual(SwapCase('Sup DUDE!!?'), 'sUP dude!!?');
  });
});