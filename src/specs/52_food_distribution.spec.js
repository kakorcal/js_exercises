const assert = require('assert');
const path = require('path');
const FoodDistribution = require(path.resolve('src/prompts', '52_food_distribution'));

/*
  Input:5, 2, 3, 4, 5
  Output:1

  Input:3, 2, 1, 0, 4, 1, 0
  Output:4
*/

describe('52_food_distribution', ()=>{
  it('should be a function', ()=>{
    assert.strictEqual(typeof FoodDistribution, 'function');
  });

  it('should distribute food', ()=>{
    assert.strictEqual(FoodDistribution([5, 2, 3, 4, 5]), 1);
    assert.strictEqual(FoodDistribution([3, 2, 1, 0, 4, 1, 0]), 4);
    assert.strictEqual(FoodDistribution([4, 5, 2, 3, 1, 0]), 2);
    assert.strictEqual(FoodDistribution([5, 3, 1, 2, 1]), 0);
    assert.strictEqual(FoodDistribution([1, 5, 4, 1]), 3); 
  });
});