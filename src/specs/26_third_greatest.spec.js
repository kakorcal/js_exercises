const assert = require('assert');
const path = require('path');
const ThirdGreatest = require(path.resolve('src/prompts', '26_third_greatest'));

/*
  Input:"coder","byte","code"
  Output:"code"

  Input:"abc","defg","z","hijk"
  Output:"abc"
*/

describe('26_third_greatest', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof ThirdGreatest, 'function');
  });

  it('should return the third greatest word', ()=>{
    assert.strictEqual(ThirdGreatest(["coder","byte","code"]), 'code');
    assert.strictEqual(ThirdGreatest(["abc","defg","z","hijk"]), 'abc');
    assert.strictEqual(ThirdGreatest(["hello", "world", "before", "all"]), 'world');
    assert.strictEqual(ThirdGreatest(["hello", "world", "after", "all"]), 'after');
  });
});