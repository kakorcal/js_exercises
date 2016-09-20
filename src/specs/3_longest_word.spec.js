const assert = require('assert');
const path = require('path');
const LongestWord = require(path.resolve('src/prompts', '3_longest_word'));

/*
  Input  : "fun&!! time"
  Output : "time"

  Input  : "I love dogs"
  Output : "love"
*/

describe('3_longest_word', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof LongestWord, 'function');
  });

  it('should return the longest word in the string', ()=>{
    assert.strictEqual(LongestWord('fun&!! time'), 'time');
    assert.strictEqual(LongestWord('I love dogs'), 'love');
  });
});