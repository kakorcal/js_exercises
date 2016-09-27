/*
  DESCRIPTION:
  have the function EvenPairs(str) take the str parameter being passed 
  and determine if a pair of adjacent even numbers exists anywhere in 
  the string. If a pair exists, return the string true, otherwise return 
  false. For example: if str is "f178svg3k19k46" then there are two even 
  numbers at the end of the string, "46" so your program should return 
  the string true. Another example: if str is "7r5gg812" then the pair 
  is "812" (8 and 12) so your program should return the string true. 
*/

function EvenPairs(str){
  return str.match(/\d\d+/g, ' ') ? str.match(/\d\d+/g, ' ').some(num => (+num) % 2 === 0).toString() : 'false';
}

module.exports = EvenPairs;



















/* 
  function EvenPairs(str){
    var regex = /[24680]\d*[24680]/
    return regex.test(str);
  }
*/