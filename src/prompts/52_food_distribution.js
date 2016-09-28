/*
  DESCRIPTION:
  have the function FoodDistribution(arr) read the array of numbers stored in 
  arr which will represent the hunger level of different people ranging from 
  0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). You will also 
  have N sandwiches to give out which will range from 1 to 20. The format of 
  the array will be [N, h1, h2, h3, ...] where N represents the number of 
  sandwiches you have and the rest of the array will represent the hunger 
  levels of different people. Your goal is to minimize the hunger difference 
  between each pair of people in the array using the sandwiches you have 
  available. 

  For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to 
  give out. You can distribute them in the following order to the people: 
  2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now 
  become: [1, 1, 1, 1]. The difference between each pair of people is now 0, 
  the total is also 0, so your program should return 0. Note: You may not 
  have to give out all, or even any, of your sandwiches to produce a 
  minimized difference. 

  Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the 
  sandwiches in the following order: [3, 0, 1, 0, 0] which makes all the 
  hunger levels the following: [2, 2, 2, 1, 0]. The differences between each 
  pair of people is now: 0, 0, 1, 1 and so your program should return the 
  final minimized difference of 2.
*/

/*
  calculate diffArr by comparing each pair.
  find the indexes where the largest difference occurs
  until the food distribution difference is 0 or food is 0, loop through
  each person and hand out food.
  5,2,3,1,0 -> 4,2,3,1,0 -> 3,2,3,1,0 -> 3,2,2,1,0 -> 2,2,2,1,0  (arr)
  3,1,2,1   -> 2,1,2,1   -> 1,1,2,1   -> 1,0,1,1   -> 0,0,1,1    (diffArr)
  return the sum of the diffArr
*/

function FoodDistribution(arr){
  var foodCount = arr[0];
  var people = arr.slice(1);
  var distArr = findDist(people);
  var foodDiff = findSum(distArr);

  while(foodCount > 0 && foodDiff !== 0){
    var maxIdx = findMax(people);
    people[maxIdx]--;
    foodCount--;
    distArr = findDist(people);
    foodDiff = findSum(distArr); 
  }

  return foodDiff;
  
  function findDist(arr){
    var dist = [];
    for(var i = 0; i < arr.length - 1; i++){
      dist.push(Math.abs(arr[i] - arr[i+1]));
    }
    return dist;
  }

  function findMax(arr){
    var idx = 0;
    var val = arr[0];
    for(var i = 1; i < arr.length; i++){
      if(arr[i] > val){
        val = arr[i];
        idx = i;
      }
    }
    return idx;
  }

  function findSum(arr){
    return arr.reduce((a,b) => a+b);
  }
}

module.exports = FoodDistribution;



















/*
  

*/