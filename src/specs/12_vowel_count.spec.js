const assert = require('assert');
const path = require('path');
const VowelCount = require(path.resolve('src/prompts', '12_vowel_count'));

/*
  Input:"hello"
  Output:2

  Input:"coderbyte"
  Output:3
*/

describe('12_vowel_count', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof VowelCount, 'function');
  });

  it('should count the vowels', ()=>{
    assert.strictEqual(VowelCount('hello'), 2);
    assert.strictEqual(VowelCount('coderbyte'), 3);
    assert.strictEqual(VowelCount('All cows eat grass'), 5);
    assert.strictEqual(VowelCount('bzz8*'), 0);
  });
});