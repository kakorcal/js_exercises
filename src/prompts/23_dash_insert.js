/*
  DESCRIPTION:
  have the function DashInsert(str) insert dashes ('-') between each two 
  odd numbers in str. For example: if str is 454793 the output should be 
  4547-9-3. Don't count zero as an odd number. 
*/

function DashInsert(str){
  var acc = '';
  str.split('').reduce((prev, curr, idx)=>{
    if(isOdd(prev) && isOdd(curr)) curr = '-' + curr;
    if(idx === 1) acc = prev + curr;
    else acc += curr;
    return curr;
  });  

  function isOdd(str){
    return +str % 2 !== 0;
  }
  return acc;
}

module.exports = DashInsert;












/*
  function DashInsert(str) { 
    return str.toString().split('').reduce(function(acc, curr, idx, arr){
      if(curr % 2 !== 0 && arr[idx+1] % 2 !== 0 && arr[idx+1] !== undefined){
          return acc = acc + curr + '-';
      }else{
          return acc = acc + curr;
      }
    }, "");      
  }
*/