const assert = require('assert');
const path = require('path');
const AlphabetSoup = require(path.resolve('src/prompts', '10_alphabet_soup'));

/*
  Input:"coderbyte"
  Output:"bcdeeorty"

  Input:"hooplah"
  Output:"ahhloop"
*/

describe('10_alphabet_soup', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof AlphabetSoup, 'function');
  });

  it('should return the string in alphabetical order', ()=>{
    assert.strictEqual(AlphabetSoup('coderbyte'), 'bcdeeorty');
    assert.strictEqual(AlphabetSoup('hooplah'), 'ahhloop');
  });
});