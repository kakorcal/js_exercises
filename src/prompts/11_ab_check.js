/*
  DESCRIPTION:
  have the function ABCheck(str) take the str parameter being 
  passed and return the string true if the characters a and b are 
  separated by exactly 3 places anywhere in the string at least once 
  (ie. "lane borrowed" would result in true because there is exactly 
  three characters between a and b). Otherwise return the string false.
*/

function ABCheck(str){
  for(var i = 0; i < str.length; i++){
    // if found return true
    if(check(str, i)) return true;
  }

  function check(input, idx){  
    switch(input[idx]){
      case 'a':
        if(input[idx - 4] === 'b' || input[idx + 4] === 'b') return true;
        break;
      case 'b':
        if(input[idx - 4] === 'a' || input[idx + 4] === 'a') return true;
        break;
      default: 
        break;
    }
    return false;
  }
  return false;
}

module.exports = ABCheck;












/*
  function ABCheck(str) { 

    // code goes here  
    return str.split('').abCheck(3);
           
  }

  Array.prototype.abCheck = function(distance){
    var a = 'a';
    var b = 'b';
    var dist = distance + 1;
    var bool = false;

    for(var i = 0; i < this.length; i++){
      if(this[i] === a){
        if(this[i+dist] === b){
          bool = true;
        }
      }else if(this[i] === b){
        if(this[i+dist] === a){
          bool = true;
        }
      }
    }
    return bool;
  }

*/