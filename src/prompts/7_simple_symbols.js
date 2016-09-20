/*
  DESCRIPTION:
  have the function SimpleSymbols(str) take the str parameter being passed
  and determine if it is an acceptable sequence by either returning the string 
  true or false. The str parameter will be composed of + and = symbols with 
  several letters between them (ie. ++d+===+c++==a) and for the string to be 
  true each letter must be surrounded by a + symbol. So the string to the 
  left would be false. The string will not be empty and will have at least one letter.

  Input  : "+d+=3=+s+"
  Output : "true"

  Input  : "f++d+"
  Output : "false"
*/

function SimpleSymbols(str){
  for(var i = 0; i < str.length; i++){
    if(/[A-Za-z]/.test(str[i])){
      if(str[i-1] !== '+' || str[i+1] !== '+') return false;
    }
  }
  return true;
}

module.exports = SimpleSymbols;








/*
  function SimpleSymbols(str) { 

    // code goes here  
    var before = str.match(/\+[a-z]/g);
      var after = str.match(/[a-z]\+/g);
      if(!before || !after)return false
      return before.length === after.length; 
           
  }
*/