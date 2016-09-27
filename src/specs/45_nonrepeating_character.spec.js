const assert = require('assert');
const path = require('path');
const NonrepeatingCharacter = require(path.resolve('src/prompts', '45_nonrepeating_character'));

/*
  Input:"abcdef"
  Output:"a"

  Input:"hello world hi hey"
  Output:"w"
*/

describe('45_nonrepeating_character', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof NonrepeatingCharacter, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(NonrepeatingCharacter('abcdef'), 'a');
    assert.strictEqual(NonrepeatingCharacter("hello world hi hey"), 'w');
    assert.strictEqual(NonrepeatingCharacter("agettkgaeee"), 'k');
    assert.strictEqual(NonrepeatingCharacter("aaaaxabbbbbcpcccccddddddeeeeefffffff"), 'x');
  });
});