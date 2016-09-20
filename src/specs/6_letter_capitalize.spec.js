const assert = require('assert');
const path = require('path');
const LetterCapitalize = require(path.resolve('src/prompts', '6_letter_capitalize'));

/*
  Input  : "hello world"
  Output : "Hello World"

  Input  : "i ran there"
  Output : "I Ran There"
*/

describe('6_letter_capitalize', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof LetterCapitalize, 'function');
  });

  it('should capitalize the first letter in each word', ()=>{
    assert.strictEqual(LetterCapitalize('hello world'), 'Hello World');
    assert.strictEqual(LetterCapitalize('i ran there'), 'I Ran There');
  });
});