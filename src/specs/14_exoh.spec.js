const assert = require('assert');
const path = require('path');
const ExOh = require(path.resolve('src/prompts', '14_exoh'));

/*
  Input:"xooxxo"
  Output:"true"

  Input:"x"
  Output:"false"
*/

describe('14_exoh', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ExOh, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(ExOh('xooxxo'), true);
    assert.strictEqual(ExOh('x'), false);
    assert.strictEqual(ExOh('xooxxxxooxo'), false);
  });
});