const assert = require('assert');
const path = require('path');
const CountingMinutesI = require(path.resolve('src/prompts', '21_counting_minutesI'));

/*
  Input:"12:30pm-12:00am"
  Output:690

  Input:"1:23am-1:08am"
  Output:1425
*/

describe('21_counting_minutesI', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof CountingMinutesI, 'function');
  });

  it('should return the total number of minutes between the two times', ()=>{
    assert.strictEqual(CountingMinutesI('9:00am-10:00am'), 60);
    assert.strictEqual(CountingMinutesI('1:00pm-11:00am'), 1320);
    assert.strictEqual(CountingMinutesI('12:30pm-12:00am'), 690);
    assert.strictEqual(CountingMinutesI('1:23am-1:08am'), 1425);
  });
});