/*
  DESCRIPTION:
  have the function ArrayMatching(strArr) read the array of strings stored in 
  strArr which will contain only two elements, both of which will represent 
  an array of positive integers. For example: if strArr is 
  ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent 
  two integer arrays, and your goal for this challenge is to add the elements 
  in corresponding locations from both arrays. For the example input, 
  your program should do the following additions: 
  [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. 
  Your program should finally return this resulting array in a string format 
  with each element separated by a hyphen: 6-4-13-17. 
*/

function ArrayMatching(strArr){
  var arr1 = strArr[0].match(/\d+/g).map(num => +num);
  var arr2 = strArr[1].match(/\d+/g).map(num => +num);
  var acc = merge(arr1, arr2);
  
  function merge(a1, a2){
    if(a1.length || a2.length){
      var num1 = a1[0] ? a1[0] : 0;
      var num2 = a2[0] ? a2[0] : 0;
      return [num1+num2].concat(merge(a1.slice(1), a2.slice(1)));
    }else{
      return [];
    }
  }  

  return acc.join('-');
}

module.exports = ArrayMatching;

/*
  

*/