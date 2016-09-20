const assert = require('assert');
const path = require('path');
const ABCheck = require(path.resolve('src/prompts', '11_ab_check'));

/*
  Input:"after badly"
  Output:"false"

  Input:"Laura sobs"
  Output:"true"
*/

describe('11_ab_check', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ABCheck, 'function');
  });

  it('should be a function', ()=>{
    assert.strictEqual(ABCheck('after badly'), false);
    assert.strictEqual(ABCheck('Laura sobs'), true);
    assert.strictEqual(ABCheck('lane borrowed'), true);
  });
});