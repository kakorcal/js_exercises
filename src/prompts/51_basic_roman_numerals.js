/*
  DESCRIPTION:
  have the function BasicRomanNumerals(str) read str which will be a string of Roman 
  numerals. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, 
  D for 500 and M for 1000. In Roman numerals, to create a number like 11 you simply add 
  a 1 after the 10, so you get XI. But to create a number like 19, you use the subtraction 
  notation which is to add an I before an X or V (or add an X before an L or C). So 19 
  in Roman numerals is XIX. 

  The goal of your program is to return the decimal equivalent of the Roman numeral given. 
  For example: if str is "XXIV" your program should return 24 
*/

/*
  I : 1
  V : 5
  X : 10
  L : 50
  C : 100
  D : 500 
  M : 1000
*/

/*  
  IV : 4
  IX : 9
  XL : 40
  XC : 90
  CD : 400
  CM : 900
*/

function BasicRomanNumerals(str){
  var numArr = [];
  var strArr = str.split('');

  for(var i = 0; i < strArr.length; i++){
    var num = toNum(strArr[i], strArr[i+1]);
    if(num.toString().includes('4') || num.toString().includes('9')) i++;
    numArr.push(num);
  }
  
  return numArr.reduce((a, b) => a + b);

  function toNum(a, b){
    var roman = ['I','V','X','L','C','D','M'];
    var aidx = roman.indexOf(a);
    var bidx = roman.indexOf(b);
    var num = convert(a);
    
    if(roman[aidx+1] === roman[bidx] || roman[aidx+2] === roman[bidx]){
      num = convert(b) - convert(a); 
    }
    return num;
  }

  function convert(num){
     switch(num){
      case 'I': num = 1;    break;
      case 'V': num = 5;    break;
      case 'X': num = 10;   break;
      case 'L': num = 50;   break;
      case 'C': num = 100;  break;
      case 'D': num = 500;  break;
      case 'M': num = 1000; break;
      default:  num = 0;    break;
    }
    return num;
  }
}

module.exports = BasicRomanNumerals;



















/*
  

*/