/*
  DESCRIPTION:
  have the function ThirdGreatest(strArr) take the array of strings stored in 
  strArr and return the third largest word within in. So for example: 
  if strArr is ["hello", "world", "before", "all"] your output should be world 
  because "before" is 6 letters long, and "hello" and "world" are both 5, 
  but the output should be world because it appeared as the last 5 letter 
  word in the array. If strArr was ["hello", "world", "after", "all"] the output 
  should be after because the first three words are all 5 letters long, 
  so return the last one. The array will have at least three strings and 
  each string will only contain letters. 
*/

function ThirdGreatest(strArr){
  function insertionSort(arr){
    for(var i = 0; i < arr.length; i++){
      for(var j = i; j > 0; j--){
        if(arr[j].length > arr[j-1].length){
          var temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
        }else{
          break;
        }
      }
    }
    return arr;
  }
  return insertionSort(strArr)[2];
}

module.exports = ThirdGreatest;

/*
    function ThirdGreatest(strArr) { 
        var arr = []; strArr.map(el => arr.push(el));
        var first = popmax(arr);
        var second = popmax(arr);

        return second.reduce(function(a,b){
            if(a.length === b.length){
                return a;
            }else if(a.length < b.length){
                return b;
            }else if(a.length > b.length){
                return a;
            }
        });
    }

    function popmax(arr){
        var max = arr.reduce(function(a,b){
            if(a.length === b.length){
                return a;
            }else if(a.length < b.length){
                return b; 
            }else if(a.length > b.length){
                return a;
            }
        });
        arr.splice(arr.indexOf(max),1);
        return arr;
    }
       
    // keep this function call here 
    ThirdGreatest(readline());

*/