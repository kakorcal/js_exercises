/*
  DESCRIPTION:
  have the function SecondGreatLow(arr) take the array of numbers 
  stored in arr and return the second lowest and second greatest 
  numbers, respectively, separated by a space. For example: if arr contains 
  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty 
  and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/

function SecondGreatLow(arr){
  var lowest = arr[0];
  var greatest = arr[arr.length - 1];
  var sorted = insertionSort(arr);

  for(var i = 0; i < sorted.length - 1; i++){
    if(sorted[i] !== sorted[i+1]){
      lowest = sorted[i+1];
      break;
    }
  }

  for(var j = sorted.length - 1; j > 0; j--){
    if(sorted[j] !== sorted[j-1]){
      greatest = sorted[j-1];
      break;
    }
  }

  function insertionSort(arr){
    for(var i = 0; i < arr.length; i++){
      for(var j = i; j > 0; j--){
        if(arr[j] < arr[j-1]) [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        else break;
      }
    }
    return arr;
  }

  return lowest + ' ' + greatest;
}

module.exports = SecondGreatLow;












/*
  function SecondGreatLow(arr) { 
      var arr = arr.sort(function(a,b){ 
          return a-b; 
      }).filter(function(curr, indx){
          return arr.indexOf(curr) === indx;
      });

      if(arr.length <= 2){
          return arr[arr.length - 1] + ' ' + arr[0];
      }else{
          return arr[arr.length - 2] + ' ' + arr[1];
      }      
  }
*/