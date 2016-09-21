const assert = require('assert');
const path = require('path');
const LetterCountI = require(path.resolve('src/prompts', '18_letter_count'));

/*
  Input:"Hello apple pie"
  Output:"Hello"

  Input:"No words"
  Output:-1
*/

describe('18_letter_count', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof LetterCountI, 'function');
  });

  it('should return the word with the highest occurrence count', ()=>{
    assert.strictEqual(LetterCountI('Hello apple pie'), 'Hello');
    assert.strictEqual(LetterCountI('No words'), -1);
    assert.strictEqual(LetterCountI('"Today, is the greatest day ever!"'), 'greatest');
    assert.strictEqual(LetterCountI('coderbyte'), 'coderbyte');
  });
});