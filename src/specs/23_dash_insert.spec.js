const assert = require('assert');
const path = require('path');
const DashInsert = require(path.resolve('src/prompts', '23_dash_insert'));

/*
  Input:99946
  Output:9-9-946

  Input:56730
  Output:567-30
*/

describe('23_dash_insert', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof DashInsert, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(DashInsert('99946'), '9-9-946');
    assert.strictEqual(DashInsert('56730'), '567-30');
    assert.strictEqual(DashInsert('454793'), '4547-9-3');
  });
});