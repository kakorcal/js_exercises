/*
  DESCRIPTION:
  have the function OffLineMinimum(strArr) take the strArr parameter being passed 
  which will be an array of integers ranging from 1...n and the letter "E" 
  and return the correct subset based on the following rules. The input will be in 
  the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand 
  for integers and the E means take out the smallest integer currently in the 
  whole set. When finished, your program should return that new set with integers 
  separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
  then your program should return 4,1,5. 
*/

function OffLineMinimum(strArr){
  var E = strArr.indexOf('E');
  if(E !== -1){
    var subset = strArr.slice(0, E);
    var min = Math.min.apply(null, subset).toString();
    var midx = strArr.indexOf(min);
    var rest = strArr.reduce((acc, str, idx)=>{
      if(idx !== midx && idx !== E) acc.push(str);
      return acc;
    }, []);
    return [min].concat(OffLineMinimum(rest)).join(',');
  }
  return [];
}

module.exports = OffLineMinimum;



















/*
  function OffLineMinimum(strArr){ 
      var result = [];
      var arr = strArr.map(el => el);
      var ecount = strArr.filter(e => e === 'E').length;

      for(var i = 0; i < ecount; i++){
          var min = arr.slice(0, arr.indexOf('E'))
                       .map(num => Number(num))
                       .reduce((a,b) => a < b ? a : b);

          arr.splice(arr.indexOf(String(min)),1);
          arr.splice(arr.indexOf('E'),1);
          result.push(String(min));
      }

      return result.join(',');
  }
*/