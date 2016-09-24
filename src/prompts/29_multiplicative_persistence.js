/*
  DESCRIPTION:
  have the function MultiplicativePersistence(num) take the num parameter being 
  passed which will always be a positive integer and return its multiplicative 
  persistence which is the number of times you must multiply the digits in num 
  until you reach a single digit. For example: if num is 39 then your program 
  should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and 
  you stop at 4. 
*/

function MultiplicativePersistence(num){
  var count = 0;

  while(num >= 10){
    num = num.toString().split('').reduce((a,b)=>(+a)*(+b));
    count++;
  }

  return count;
}

module.exports = MultiplicativePersistence;



















/*
  function MultiplicativePersistence(num) { 
    var count = arguments[1] || 0;
      var sum = num.toString().split('')
        .map(str => Number(str))
        .reduce((a,b) => a*b); 

      if(num >= 10){
        return MultiplicativePersistence(sum, count+1);
      }else if(num < 10){
        return count;
      } 
           
  }
*/