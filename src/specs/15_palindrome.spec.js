const assert = require('assert');
const path = require('path');
const Palindrome = require(path.resolve('src/prompts', '15_palindrome'));

/*
  Input:"never odd or even"
  Output:"true"

  Input:"eye"
  Output:"true"
*/

describe('15_palindrome', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof Palindrome, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(Palindrome('never odd or even'), true);
    assert.strictEqual(Palindrome('eye'), true);
  });
});