
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