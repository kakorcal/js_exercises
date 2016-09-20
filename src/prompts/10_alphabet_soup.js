/*
  DESCRIPTION:
  have the function AlphabetSoup(str) take the str string parameter 
  being passed and return the string with the letters in alphabetical 
  order (ie. hello becomes ehllo). Assume numbers and punctuation 
  symbols will not be included in the string. 
*/

function AlphabetSoup(str){
  // selection sort
  var arr = str.split('');

  for(var i = 0; i < arr.length; i++){
    var min = i;
    for(var j = i + 1; j < arr.length; j++){
      if(arr[min].localeCompare(arr[j]) > 0) min = j;
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }

  return arr.join('');
}

module.exports = AlphabetSoup;











/*
  function AlphabetSoup(str) { 
      // code goes here  
      return str.split('').map(function(lett){
        return lett.charCodeAt(0);
      }).arrangeMin().map(function(num){
        return String.fromCharCode(num);
      }).join('');
           
  }

  Array.prototype.arrangeMin = function(){
    var arr = [];
    var that = this;
    while(that.length > 0){
      var min = that[0]; 
      var indx = 0;
      for(var i = 0; i < that.length; i++){
        if(min > that[i]){
          min = that[i];
          indx = i; 
        }
      }
      arr.push(min);
      that.splice(indx, 1);
    }
    return arr;
  };
*/