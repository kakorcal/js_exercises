/*
  DESCRIPTION:
  have the function AdditivePersistence(num) take the num parameter being 
  passed which will always be a positive integer and return its additive 
  persistence which is the number of times you must add the digits in 
  num until you reach a single digit. For example: if num is 2718 then 
  your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 
  and you stop at 9. 
*/

function AdditivePersistence(num){
  var count = 0;

  while(num >= 10){
    num = num.toString().split('').reduce((a,b)=>(+a)+(+b));
    count++;
  }

  return count;
}

module.exports = AdditivePersistence;













/*
  function AdditivePersistence(num) { 
    var count = arguments[1] || 0;
    var sum = num.toString().split('')
      .map(str => Number(str))
      .reduce((a,b) => a+b); 

    if(num >= 10){
      return AdditivePersistence(sum, count+1);
    }else if(num < 10){
      return count;
    }
  }
*/