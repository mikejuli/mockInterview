
var reverseArr = function (arr) {

  var tempArr  = [];

  for (var c = 0; c<(arr.length*2)-1; c++){

    if(c<arr.length){

      var count = 0;

      for(var i = 0; i<=c;i++){
       tempArr.push(arr[i][c-count]);
        count++;
      }

      tempArr.sort();

      var count = 0;

      for(var i = 0; i<=c;i++){
        arr[i][c-count] = tempArr[i];
        count++;
      }

      tempArr = [];

    } else {

      var count = 0;

      for(var i = 0; i<(arr.length*2)-1-c;i++){

       tempArr.push(arr[i+1+c-arr.length][arr.length-1-count]);


      count++;
    }

      tempArr.sort();

      var count = 0;
      for(var i = 0; i<(arr.length*2)-1-c;i++){

        arr[i+1+c-arr.length][arr.length-1-count]=tempArr[i];

         count++;
       }

      tempArr = [];


    }


  }


  // [0][0]
  // [0][1]  [1][0]
  // [0][2]  [1][1]   [2][0]

  // [0][3]  [1][2]   [2][1]   [3][0]

  // [1][3]  [2][2]   [3][1]
  // [2][3]  [3][2]
  // [3][3]



 return arr;

}



// tests


var testArr = [
              [10,61,82,93],
              [34,44,54,64],
              [55,66,76,89],
              [67,77,87,97]]

var testArr1 = [
              [1,3],
              [2,4]]

console.log(reverseArr(testArr));