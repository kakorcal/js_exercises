/*
  DESCRIPTION:
  have the function NonrepeatingCharacter(str) take the str parameter 
  being passed, which will contain only alphabetic characters and 
  spaces, and return the first non-repeating character. For example: 
  if str is "agettkgaeee" then your program should return k. The string 
  will always contain at least one character and there will always be 
  at least one non-repeating character. 
*/

function NonrepeatingCharacter(str){
  var occ = str.match(/[A-Za-z]/g).reduce((acc, cur)=>{
    if(acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  return Object.keys(occ).filter(cur => occ[cur] === 1)[0];
}

module.exports = NonrepeatingCharacter;



















/*
  

*/