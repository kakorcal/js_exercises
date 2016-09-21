const assert = require('assert');
const path = require('path');
const SecondGreatLow = require(path.resolve('src/prompts', '19_second_greatlow'));

/*
  Input:1, 42, 42, 180
  Output:"42 42"

  Input:4, 90
  Output:"90 4"
*/

describe('19_second_greatlow', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof SecondGreatLow, 'function');
  });

  it('should return both second greatest and lowest numbers', ()=>{
    assert.strictEqual(SecondGreatLow([7, 7, 12, 98, 106]), '12 98');
    assert.strictEqual(SecondGreatLow([1, 42, 42, 180]), '42 42');
    assert.strictEqual(SecondGreatLow([4, 90]), '90 4');
    assert.strictEqual(SecondGreatLow([78, 90, 100, 1, 2]), '2 90');
    assert.strictEqual(SecondGreatLow([-4, -5, 10, 2]), '-4 2');
    assert.strictEqual(SecondGreatLow([100, 200, 3, 400, 5, 1]), '3 200');
    assert.strictEqual(SecondGreatLow([4, 60, 7, 188]), '7 60');
    assert.strictEqual(SecondGreatLow([90, 23]), '90 23');
    assert.strictEqual(SecondGreatLow([80, 80]), '80 80');
  });
});