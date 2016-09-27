const assert = require('assert');
const path = require('path');
const PalindromeCreator = require(path.resolve('src/prompts', '50_palindrome_creator'));

/*
  Input:"mmop"
  Output:"not possible"

  Input:"kjjjhjjj"
  Output:"k"
*/

describe('50_palindrome_creator', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof PalindromeCreator, 'function');
  });

  it('should determine if the string can form a palindrome', ()=>{
    assert.strictEqual(PalindromeCreator('mmop'), 'not possible');
    assert.strictEqual(PalindromeCreator('kjjjhjjj'), 'k');
    assert.strictEqual(PalindromeCreator('abjchba'), 'jc');
    assert.strictEqual(PalindromeCreator('abhba'), 'palindrome');
    assert.strictEqual(PalindromeCreator('aaabaaaj'), 'j');
    assert.strictEqual(PalindromeCreator('vhhgghhgghhk'), 'vk');
    assert.strictEqual(PalindromeCreator('lolkm'), 'km');
  });
});