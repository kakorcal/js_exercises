const assert = require('assert');
const path = require('path');
const WaveSorting = require(path.resolve('src/prompts', '38_wave_sorting'));

/*
  Input:0, 1, 2, 4, 1, 1, 1
  Output:"false"

  Input:0, 4, 22, 4, 14, 4, 2
  Output:"true"
*/

describe('38_wave_sorting', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof WaveSorting, 'function');
  });

  it('should determine if the array can be wave sorted', ()=>{
    assert.strictEqual(WaveSorting([0, 1, 2, 4, 1, 1, 1]), 'false');
    assert.strictEqual(WaveSorting([0, 4, 22, 4, 14, 4, 2]), 'true');
    assert.strictEqual(WaveSorting([0, 1, 2, 4, 1, 4]), 'true');
    assert.strictEqual(WaveSorting([0, 1, 2, 3, 3, 3, 3, 3, 8, 9]), 'true');
  });
});