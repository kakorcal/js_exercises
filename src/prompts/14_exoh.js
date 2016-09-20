/*
  DESCRIPTION:
  have the function ExOh(str) take the str parameter being passed 
  and return the string true if there is an equal number of x's and o's, 
  otherwise return the string false. Only these two letters will be 
  entered in the string, no punctuation or numbers. For example: 
  if str is "xooxxxxooxo" then the output should return false because 
  there are 6 x's and 5 o's. 
*/

function ExOh(str){
  var x = str.match(/x/g) ? str.match(/x/g).length : 0;
  var o = str.match(/o/g) ? str.match(/o/g).length : 0;
  return x === o;
}

module.exports = ExOh;

/*
  function ExOh(str) { 

    // code goes here  
    return str.split('').exOh(); 
           
  }

  Array.prototype.exOh = function(){
    var x = 'x';
      var o = 'o';
      var xcount = 0;
      var ocount = 0;
    
      for(var i = 0; i < this.length; i++){
        if(this[i] === x){ xcount++; }
          if(this[i] === o){ ocount++; }
      }
      if(xcount === ocount){
        return true;
      }else{
        return false;
      }
  }
*/