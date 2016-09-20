const assert = require('assert');
const path = require('path');
const WordCount = require(path.resolve('src/prompts', '13_word_count'));

/*
  Input:"Hello World"
  Output:2

  Input:"one 22 three"
  Output:3
*/

describe('13_word_count', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof WordCount, 'function');
  });

  it('should count the words', ()=>{
    assert.strictEqual(WordCount('Hello World'), 2);
    assert.strictEqual(WordCount('one 22 three'), 3);
    assert.strictEqual(WordCount('letter sz!23 z'), 3);
  });
});