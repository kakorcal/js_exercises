const assert = require('assert');
const path = require('path');
const OfflineMinimum = require(path.resolve('src/prompts', '30_offline_minimum'));

/*
  Input:"1","2","E","E","3"
  Output:"1,2"

  Input:"4","E","1","E","2","E","3","E"
  Output:"4,1,2,3"
*/

describe('30_offline_minimum', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof OfflineMinimum, 'function');
  });

  it('should return the minimums after encountering all Es', ()=>{
    assert.strictEqual(OfflineMinimum(["1","2","E","E","3"]), '1,2');
    assert.strictEqual(OfflineMinimum(["4","E","1","E","2","E","3","E"]), '4,1,2,3');
    assert.strictEqual(OfflineMinimum(["5","4","6","E","1","7","E","E","3","2"]), '4,1,5');
  });
});