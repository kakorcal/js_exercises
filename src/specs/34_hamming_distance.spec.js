const assert = require('assert');
const path = require('path');
const HammingDistance = require(path.resolve('src/prompts', '34_hamming_distance'));

/*
  Input:"10011", "10100"
  Output:3

  Input:"helloworld", "worldhello"
  Output:8
*/

describe('34_hamming_distance', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof HammingDistance, 'function');
  });

  it('should return the difference count of each string', ()=>{
    assert.strictEqual(HammingDistance(["10011", "10100"]), 3);
    assert.strictEqual(HammingDistance(["helloworld", "worldhello"]), 8);
    assert.strictEqual(HammingDistance(["coder", "codec"]), 1);
  });
});