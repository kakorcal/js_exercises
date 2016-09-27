const assert = require('assert');
const path = require('path');
const NextPalindrome = require(path.resolve('src/prompts', '43_next_palindrome'));

/*
  Input:2
  Output:3

  Input:180
  Output:181
*/

describe('43_next_palindrome', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof NextPalindrome, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(NextPalindrome(2), 3);
    assert.strictEqual(NextPalindrome(180), 181);
    assert.strictEqual(NextPalindrome(24), 33);
  });
});