/*
  DESCRIPTION:
  have the function OverlappingRanges(arr) take the array of numbers stored in arr 
  which will contain 5 positive integers, the first two representing a range of 
  numbers (a to b), the next 2 also representing another range of integers (c to d), 
  and a final 5th element (x) which will also be a positive integer, and return 
  the string true if both sets of ranges overlap by at least x numbers. For example: 
  if arr is [4, 10, 2, 6, 3] then your program should return the string true. The 
  first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers 
  are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers 
  that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by 
  at least x numbers, then your program should return the string false. 
*/

function OverlappingRanges(arr){
  var len = arr.length-1;
  var overlap = findOverlap(...arr.slice(0,len));

  function findOverlap(a1, a2, b1, b2){ 
    var diff = -1; 
    // case: range inside another range
    if(a1 >= b1 && a1 <= b2 && a2 >= b1 && a2 <= b2) diff = a2 - a1;
    if(a1 <= b1 && a2 >= b2)                         diff = b2 - b1;
    // case: partial overlap
    if(a1 <= b1 && a2 >= b1 && a2 <= b2)             diff = a2 - b1;
    if(a1 >= b1 && a1 <= b2 && a2 >= b2)             diff = b2 - a1;

    return ++diff;
  }
  
  return overlap === arr[len];
}

module.exports = OverlappingRanges;



















/*
  function OverlappingRanges(arr) { 
    var range1 = arr.slice(0,2);
    var range2 = arr.slice(2,4);
    var x = arr[arr.length-1];
    var count = null;

    for(var i = range1[0]; i <= range1[1]; i++){
      for(var j = range2[0]; j <= range2[1]; j++){
        if(i === j){
          count++;
        }
      }
    } 

    if(count >= x){
      return true;
    }else{
      return false;
    }        
  }
*/