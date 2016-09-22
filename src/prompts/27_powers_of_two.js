/*
  DESCRIPTION:
  have the function PowersofTwo(num) take the num parameter being passed 
  which will be an integer and return the string true if it's a power 
  of two. If it's not return the string false. For example if the 
  input is 16 then your program should return the string true but if the 
  input is 22 then the output should be the string false. 
*/

function PowersofTwo(num){
  // 2^x = num; where is x is a positive integer
  // x • log(2) = log(num);
  // x = log(num) / log(2);
  return Number.isInteger(Math.log(num)/Math.log(2)).toString();  
}

module.exports = PowersofTwo;














/*
  function PowersofTwo(num) { 

    var base2 = Math.log(num) / Math.log(2);
    
    if(base2 % 1 === 0){
      return true;
    }else{
      return false;
    }
           
  }
*/