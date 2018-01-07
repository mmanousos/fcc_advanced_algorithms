
function pairwise(arr, arg) {
 var index = [];
 
 function checkVal(array) {
   for (var i = 0; i < array.length; i++) {
     if ( array[i] < arg ) {
       console.log("element is " + array[i]);
       var pos = i;
       console.log("index of that element is " + pos);
       var arg2 = arg - array[i];
       var pos2 = array.indexOf(arg2, i+1);
       console.log("index of pair element is " + pos2);
       console.log("the position of that element in index array is " + index.indexOf(pos2));
       if (index.indexOf(pos2) !== -1) {
         for (var k = i+1; k < array.length; k++) {
          pos2 = array.indexOf(arg2, k); 
         }
         if ((index.indexOf(pos2) === -1) && (pos2 >= 0)) {
         index.push(pos);
         index.push(pos2);
         }
         
       } else if (pos2 >= 0) {
         index.push(pos);
         index.push(pos2);
        if (index.length > arr.length) {
           index.pop();
           index.pop();
         } 
        }
       }
     }
   }
 
    
 checkVal(arr);     
 
 return index.reduce(function(sum, value) {
  return sum + value;
 }, 0);
    
    
}

pairwise([1,4,2,3,0,5], 7);


/* fcc intermediate solution */
// more refined than mine but employs the same logic in a much cleaner way. 
// "for (var a in arr)" converts the index elements to strings. 
// "+a" and "+i" converts them back to integers to push them to the placeholder array and to check for them there.

function pairwise(arr, arg) {
  // Create empty array to keep the arrays we will add.
  var index = [];

  // Loop to check the first number.
  for (var a in arr) {
    // temporal first number.
    var temp = arr[a];

    // Second loop to check against the first number.
    for (var i = 1; i < arr.length; i++) {
      // temporal second number.
      var temp2 = arr[i];

      // Key element, this check to make sure that the numbers add to arg
      // also that the second index is greater than the first, and that neither
      // of those indices are already on the array.
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        // if true then add both indices as integers then stop checking to avoid repeats.
        index.push(+a, +i);
        break;
      }
    }
  }

  // After the two loops are done, check if index is empty to return 0
  // or if it is not, then use Array.reduce(callbackFunc) to return the sum
  // of the numbers.
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };

    return index.reduce(addAll);
  } else
      return 0;
}

// test here
pairwise([1,4,2,3,0,5], 7);


/* another solution from fcc forums that implements the idea I had of removing the values that had been used but didn't know how to go about while still preserving the original array index positions to calculate the correct sum */
// this script replaces deleted values with "undefined" so they can not be returned repeatedly as the loop executes 
// removes the need to check if those index values have already been used or to reduce values from an array before returning the result.

function pairwise(arr, arg) {
    var result = 0;
  for(var x = 0 ; x <arr.length; x++){
    for(var y = 0; y <arr.length; y++){
      if(x === y){
        break;
     }
      if(arr[x] + arr[y] === arg){
        result += x + y;
        delete arr[x];
        delete arr[y];
      } 
    }
  }
  return result;
}
pairwise([1,4,2,3,0,5], 7);



 /* Prelim code */


 function checkVal(array) {
   array.forEach(function(element) {
     if (element < arg) {
       console.log("element is " + element);
       var pos = array.indexOf(element);
       console.log("index of that element is " + pos);
       var arg2 = arg - element; 
       var pos2 = array.indexOf(arg2);
       if (pos2 >= 0) {
         index.push(pos);
         index.push(pos2);
         if (index.length > arr.length) {
           index.pop();
           index.pop();
         }
       }
     }
   }); 
 }



/*-- PSEUDOCODE --*/

// create new array to hold index numbers of matching values
// check each element in the array to find if it is less than the argument
// if yes, 
    // get the index # of that value (push to created array)
    // subtract that value from the argument
    // remove from array? 
// then check if one of the additional elements in the array === the remainder value
    // get the index # of that value as well. (push to created array)
// reduce values of created array to single value
// return reduced value


/*-- ASSIGNMENT --*/

Pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

Here are some helpful links:

Array.prototype.reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.