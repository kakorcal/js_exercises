/*
  DESCRIPTION:
  have the function CheckNums(num1,num2) take both parameters being 
  passed and return the string true if num2 is greater than num1, 
  otherwise return the string false. If the parameter values are equal 
  to each other then return the string -1. 
*/

function CheckNums(n1, n2){
  return n1 === n2 ? '-1' : n1 < n2 ? 'true' : 'false';
}

module.exports = CheckNums;












/*
  function CheckNums(num1,num2) { 

    // code goes here  
    return num2 > num1 ? true : num2 === num1 ? -1 : false; 
           
  }
*/