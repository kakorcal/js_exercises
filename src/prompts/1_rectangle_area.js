/*
  DESCRIPTION:
  Using the JavaScript language, have the function RectangleArea(strArr) 
  take the array of strings stored in strArr, which will only contain 4 elements 
  and be in the form (x y) where x and y are both integers, and return the area 
  of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements 
  will be in arbitrary order. For example: if strArr is 
  ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 
  because the width of the rectangle is 3 and the height is 2 and the area of a 
  rectangle is equal to the width * height. 

  Input  : ["(1 1)","(1 3)","(3 1)","(3 3)"]
  Output : 4

  Input  : ["(0 0)","(1 0)","(1 1)","(0 1)"]
  Output : 1
*/

function rectangleArea(strArr){
  function average(arr){
    return arr.reduce((prev, cur)=>{
      return prev + cur;
    }, 0) / arr.length;
  }

  let numArr = strArr.map(p=>{
    return p.match(/-?\d/g);
  });

  let min = numArr.reduce((prev, cur)=>{
    return average(prev) < average(cur) ? prev : cur;
  });

  let areaArr = numArr.reduce((acc, cur)=>{
    if(cur[0] === min[0] && cur[1] === min[1]) return acc;

    if(cur[1] === min[1]){
      acc.push(cur[0] - min[0]);
    }

    if(cur[0] === min[0]){
      acc.push(cur[1] - min[1]);
    }
    return acc;
  }, []);

  return areaArr.length ? areaArr.reduce((prev, cur)=>{
    return Math.abs(prev * cur);
  }) : 0;
}

module.exports = rectangleArea;