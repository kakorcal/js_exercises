/*
  DESCRIPTION:
  have the function BitwiseOne(strArr) take the array of strings 
  stored in strArr, which will only contain two strings of equal 
  length that represent binary numbers, and return a final binary 
  string that performed the bitwise OR operation on both strings. 
  A bitwise OR operation places a 0 in the new string where there 
  are zeroes in both binary strings, otherwise it places a 1 in 
  that spot. For example: if strArr is ["1001", "0100"] then your 
  program should return the string "1101"
*/

function BitwiseOne(strArr){
  var len = strArr[0].length || strArr[1].length;
  var [a, b] = strArr;
  var bstr = '';

  for(var i = 0; i < len; i++){
    if(a[i] === '0' && b[i] === '0') bstr += '0';
    else bstr += '1';
  }

  return bstr;
}

module.exports = BitwiseOne;



















/*
  

*/