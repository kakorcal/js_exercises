/*
  DESCRIPTION:
  have the function HammingDistance(strArr) take the array of strings stored in 
  strArr, which will only contain two strings of equal length and return 
  the Hamming distance between them. The Hamming distance is the number of 
  positions where the corresponding characters are different. For example: if 
  strArr is ["coder", "codec"] then your program should return 1. The string 
  will always be of equal length and will only contain lowercase characters from 
  the alphabet and numbers. 
*/

function HammingDistance(strArr){
  var dist = 0;
  var [s1, s2] = strArr;
  var len = s1.length || s2.length;

  for(var i = 0; i < len; i++){
    if(s1[i] !== s2[i]) dist++;
  }

  return dist;
}

module.exports = HammingDistance;



















/*
  function HammingDistance(strArr) { 
    var count = 0;
    var first = strArr[0];
    var second = strArr[1];

    for(var i = 0; i < first.length; i++){
      if(first[i] !== second[i]){
        count++;
      }
    }
    return count;         
  }
*/