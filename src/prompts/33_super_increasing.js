/*
  DESCRIPTION:
  have the function Superincreasing(arr) take the array of numbers stored in arr 
  and determine if the array forms a superincreasing sequence where each element 
  in the array is greater than the sum of all previous elements. The array will 
  only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] 
  then your program should return the string "true" because it forms a superincreasing 
  sequence. If a superincreasing sequence isn't formed, then your program should 
  return the string "false" 
*/

function Superincreasing(arr){
  return arr.reduce((acc, cur)=>{
    if(acc.sum >= cur) acc.isInc = 'false';
    acc.sum += cur;
    return acc;
  }, {sum: 0, isInc: 'true'}).isInc;
}

module.exports = Superincreasing;



















/*
  function Superincreasing(arr) { 
    var bool = null;
    var sumarr = [];
    var obj = arr.reduce(function(acc, curr, idx){
      if(!acc[idx]){
        var subarr = arr.slice(0, arr.indexOf(curr)+1);
        acc[idx] = subarr.reduce((a,b) => a+b);
      }
      return acc;
    }, {});

    for(var prop in obj){
      sumarr.push(obj[prop]);
    }

    for(var i = 1; i < arr.length; i++){
      if(bool !== false){
        if(arr[i] <= sumarr[i-1]){
          bool = false;
        }else{
          bool = true;
        }
      }
    }

    return bool;        
  }
*/