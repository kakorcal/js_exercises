/*
  DESCRIPTION:
  have the function ChangingSequence(arr) take the array of numbers stored in arr 
  and return the index at which the numbers stop increasing and begin decreasing 
  or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] 
  then your program should return 3 because 6 is the last point in the array where 
  the numbers were increasing and the next number begins a decreasing sequence. 
  The array will contain at least 3 numbers and it may contains only a single sequence, 
  increasing or decreasing. If there is only a single sequence in the array, then your 
  program should return -1. Indexing should begin with 0. 
*/

function ChangingSequence(arr){
  function change(arr, idx){
    if((arr[idx] > arr[idx+1] && arr[idx] > arr[idx-1])
    || (arr[idx] < arr[idx+1] && arr[idx] < arr[idx-1])) return true;
    return false;
  }
  
  for(var i = 1; i < arr.length - 1; i++){
    if(change(arr, i)) return i;
  }
  return -1;
}

module.exports = ChangingSequence;



















/*
  function ChangingSequence(arr) { 
    var change = arr.map(function(curr, idx, arr){
      if(curr < arr[idx+1]){
        return 'inc';
      }else if(arr[idx+1] === undefined){
        if(curr > arr[idx-1]){
          return 'inc';
        }else{
          return 'dec';
        }
      }else{
        return 'dec';
      }
    });

    if(change.every(curr => curr === 'inc')
    || change.every(curr => curr === 'dec')){
      return -1;
    }else{
      if(change[0] === 'inc'){
        return change.indexOf('dec');
      }else{
        return change.indexOf('inc');
      }
    }       
  }
*/