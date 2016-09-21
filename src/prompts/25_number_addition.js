/*
  DESCRIPTION:
  have the function NumberSearch(str) take the str parameter, search
  for all the numbers in the string, add them together, then 
  return that final number. For example: if str is "88Hello 3World!" the output
  should be 91. You will have to differentiate between single digit numbers 
  and multiple digit numbers like in the example above. 
  So "55Hello" and "5Hello 5" should return two different answers. 
  Each string will contain at least one letter or symbol. 
*/

function NumberAddition(str){
  return str.replace(/\D+/g, ' ').split(' ').reduce((a, b) => (+a) + (+b));
}

module.exports = NumberAddition;

/*
  
  function NumberAddition(str) { 
    var str = str.replace(/\D+/g, ' ').match(/\d+/g);
    if(str !== null){
        return str.reduce(function(acc, curr){
            return acc += Number(curr);
        }, 0);
    }else{
        return 0;
    }         
  }
*/