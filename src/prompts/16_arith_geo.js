/*
  DESCRIPTION:
  have the function ArithGeo(arr) take the array of numbers stored in arr 
  and return the string "Arithmetic" if the sequence follows an arithmetic 
  pattern or return "Geometric" if it follows a geometric pattern. 
  If the sequence doesn't follow either pattern return -1. An arithmetic 
  sequence is one where the difference between each of the numbers is 
  consistent, where as in a geometric sequence, each term after the first 
  is multiplied by some constant or common ratio. 
  Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
  Negative numbers may be entered as parameters, 0 will not be entered, and 
  no array will contain all the same elements. 

*/

function ArithGeo(arr){
  var arith = true;
  var geo = true;
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
  
  arr.reduce((prev, curr)=>{
    if(curr - prev !== diff) arith = false;
    if(curr / prev !== ratio) geo = false;
    return curr;
  });

  if(arith) return 'Arithmetic';
  if(geo) return 'Geometric';
  return -1;
}

module.exports = ArithGeo;

/*
  function ArithGeo(arr) { 

    // code goes here
    if(arr.arith() === 'Arithmetic'){
      return 'Arithmetic';
    }else if(arr.geo() === 'Geometric'){
      return 'Geometric';
    }else{
      return -1;
    }      
  }

  Array.prototype.arith = function(){
    var diff = this[1]-this[0];
    var output = 'Arithmetic';
      for(var i = 0; i < this.length; i++){
        if(this[i+1] !== undefined){
          var currentDiff = this[i+1]-this[i];
      if(diff !== currentDiff){
            output = -1;
          }
        }
      }
      return output;
  };

  Array.prototype.geo = function(){
    var ratio = this[1]/this[0]; 
    var output = 'Geometric';
      for(var i = 0; i < this.length; i++){
        if(this[i+1] !== undefined){
          var currentRatio = this[i+1]/this[i];
      if(ratio !== currentRatio){
            output = -1;
          }
        }
      }
      return output;
  };
*/