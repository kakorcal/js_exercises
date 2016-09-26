/*
  DESCRIPTION:
  have the function BinaryReversal(str) take the str parameter being 
  passed, which will be a positive integer, take its binary representation, 
  reverse that string of bits, and then finally return the new reversed 
  string in decimal form. For example: if str is "47" then the binary 
  version of this integer is 00101111. Your program should reverse this 
  binary string which then becomes: 11110100 and then finally return the 
  decimal version of this string, which is 244. 
*/

function BinaryReversal(str){
  let bin = parseInt(str, 10).toString(2);
  let num = `${'0'.repeat(bin.length % 8 === 0 ? 0 :  8 - bin.length % 8)}${bin}`;
  return parseInt(num.split('').reverse().join(''), 2).toString();
} 

module.exports = BinaryReversal;



















/*
  

*/