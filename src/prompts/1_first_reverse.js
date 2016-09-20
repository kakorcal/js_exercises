/*
  DESCRIPTION:
  Have the function FirstReverse(str) take the str parameter being 
  passed and return the string in reversed order. 
  
  Input  : "coderbyte"
  Output : "etybredoc"

  Input  : "I Love Code"
  Output : "edoC evoL I"
*/

function FirstReverse(str){
  return str.length ? FirstReverse(str.substring(1)) + str[0] : '';
}

module.exports = FirstReverse;

/*
  function FirstReverse(str) { 

    // code goes here  
    return str.split('').reverse().join(''); 
           
  }
*/