const assert = require('assert');
const path = require('path');
const ArithGeo = require(path.resolve('src/prompts', '16_arith_geo'));

/*
  Input:5,10,15
  Output:"Arithmetic"

  Input:2,4,16,24
  Output:-1

*/

describe('16_arith_geo', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ArithGeo, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(ArithGeo([5,10,15]), 'Arithmetic');
    assert.strictEqual(ArithGeo([2,4,16,24]), -1);
    assert.strictEqual(ArithGeo([2,6,18,54]), 'Geometric');
  });
});