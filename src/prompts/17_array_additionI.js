/*
  DESCRIPTION:
  have the function ArrayAdditionI(arr) take the array of numbers 
  stored in arr and return the string true if any combination of 
  numbers in the array can be added up to equal the largest number 
  in the array, otherwise return the string false. For example: if 
  arr contains [4, 6, 23, 10, 1, 3] the output should return true 
  because 4 + 6 + 10 + 3 = 23. The array will not be empty, will 
  not contain all the same elements, and may contain negative numbers. 
*/

function ArrayAdditionI(arr){
  var sorted =  arr.slice().sort((a,b) => b-a);
  var max = sorted[0];
  return findMatch(sorted.slice(1));

  function findMatch(arr){
    var queue = [arr];
    while(queue.length){
      var front = queue.shift();
      var sum = front.reduce((a,b) => a+b);
      if(sum !== max){
        for(var i = 0; i < front.length; i++){
          swap(front, i, 0);
          var sub = front.slice(1);
          if(sub.length > 1) queue.push(sub);
          swap(front, i, 0);
        }
      }else{
        return 'true';
      }
    }
    return 'false';
  }

  function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
}

module.exports = ArrayAdditionI;



















/*
  function ArrayAdditionI(arr) { 
    var largest = arr.sort(function(a,b){return a-b}).pop();
    function recursion(target, array){
      if(array.length === 0){
        return target === 0; 
      }
      var n = array[0];
      array = array.slice(1);
      return recursion(target,array) || recursion(target-n,array);
    }
    return recursion(largest,arr);
  }

  function ArrayAdditionI(arr) {
    
    function sumChecker(arr, sum, length) {
      if (sum === 0) {
        return true;
      }
      if (sum !== 0 && length === 0) {
        return false;
      }
      return sumChecker(arr, sum, length - 1) || 
        sumChecker(arr, sum - arr[length - 1], length - 1);
    }
    
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    var x = arr.length;
    
    return sumChecker(arr, max, x);
           
  }
*/