/*
  DESCRIPTION:
  have the function LargestPair(num) take the num parameter being 
  passed and determine the largest double digit number within the 
  whole number. For example: if num is 4759472 then your program 
  should return 94 because that is the largest double digit number. 
  The input will always contain at least two positive digits. 
*/

function LargestPair(num){
  var max = -1;
  
  num.toString().split('').reduce((prev, curr, idx)=>{
    if(idx === 0 || max < prev + curr) max = prev + curr;
    return curr;  
  });

  return +max;
}

module.exports = LargestPair;



















/*
  

*/