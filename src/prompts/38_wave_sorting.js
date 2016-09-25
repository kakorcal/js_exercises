/*
  DESCRIPTION:
  have the function WaveSorting(arr) take the array of positive integers stored in 
  arr and return the string true if the numbers can be arranged in a wave pattern: 
  a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, 
  if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: 
  [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. 
  The input array will always contain at least 2 elements. More examples are given 
  below as sample test cases. 
*/

function WaveSorting(arr){
  var half = Math.floor(arr.length/2);
  var sorted = insertionSort(arr);
  var sarr = sorted.slice(0, half);
  var larr = sorted.slice(half);
  var waveArr = merge(larr, sarr);

  for(var i = 1; i < waveArr.length - 1; i++){
    if(i % 2 === 0){
      if(waveArr[i] <= waveArr[i-1] || waveArr[i] <= waveArr[i+1]) return 'false';
    }else{
      if(waveArr[i] >= waveArr[i-1] || waveArr[i] >= waveArr[i+1]) return 'false';
    }
  }

  return 'true';

  function merge(a1, a2){
    if(a1.length || a2.length){
      var numArr = [a1[0], a2[0]].filter(el => el || el === 0);
      return numArr.concat(merge(a1.slice(1), a2.slice(1)));
    }
    return [];
  }

  function insertionSort(arr){
    for(var i = 0; i < arr.length; i++){
      for(var j = i; j > 0 && arr[j] < arr[j-1]; j--){
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      }
    }
    return arr;
  }
}

module.exports = WaveSorting;



















/*
  

*/