
// convert object to arrays
// concat first two arrays
// filter for duplicates
// set filtered array as new first array & get next array
// repeat
// sort ascending 
// return


function sym(args) {
  // convert object to array
  args = Array.prototype.slice.call(arguments);

// check that item in position doesn't = item in position immediately before it, returns only unique values
 function single(a) {
  return a.sort().filter(function(el, pos, ary) {
   return !pos || el != ary[pos-1];
  }); 
 }
 
 function duplicates(b) {
  b.forEach(function(el) {
   return b.filter(function(el, pos, ary) {
      var firstPos = b.indexOf(el);
      // remove both item & value in position that matched
      if (firstPos !== pos) {
        b.splice(firstPos, 1);
        b.splice(pos-1, 1); 
      }
    });
  }); 
 }
 var arr1 = arguments[0];
  for (var a = 1; a < args.length; a++) {
    arr1 = single(arr1);
    var arr2 = arguments[a];
    arr2 = single(arr2);
    var merged = arr1.concat(arr2);
    duplicates(merged);
    arr1 = merged;
  }
      

 var sorted = arr1.sort();
  console.log(sorted);
  return sorted;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);





// convert object to arrays
// get each element of first array
// check if it is present in the next array
// if no, add to new array 

// get each element of second array
// check if it is present in the first array
// if no, add to new array 
  
    // set new array as first array & move to 3rd array, run again cycling through until no more arrays remain
// sort array ascending
// return new array

/* works but not not passing fcc checks */ 
/* only good for up to 3 arrays */

function sym(args) {
  var returnArr = []; 
  args = Array.prototype.slice.call(arguments);
  var count = args.length;
  
  var arr1 = arguments[0];
  var arr2 = arguments[1];
  
  function diff() {
  
    for (var i = 0; i < arr1.length; i++) {
      var val1 = arr1[i];

      if (arr2.indexOf(val1) < 0) {
        if (returnArr.indexOf(val1) < 0) {
        returnArr.push(val1);
        }
      }
    }
    
    for (var j = 0; j < arr2.length; j++) {
      var val2 = arr2[j];
      if (arr1.indexOf(val2) < 0) {
        if (returnArr.indexOf(val1) < 0) {
        returnArr.push(val2);
       }
      }
    }
  }
 diff();
 
 if (count > 2) {
   var holdArr = returnArr;
   var arr1 = arguments[2];
   for (var k = 0; k < holdArr.length; k++) {
      var val1 = arr1[k];
      if (arr1.indexOf(val1) < 0) {
        if (returnArr.indexOf(val1) < 0) {
        returnArr.push(val1);
      }
    }
   }
 }

 var sorted = returnArr.sort();
 return sorted;
  
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);






function sym(args) {
 var returnArr = [];
 var args = Array.prototype.slice.call(arguments);
 var count = args.length;
 
 /* filter()
var arr = [1,2,3,4];
var arrTransformed = arr.filter(function(element/val, index, arr) {
  return index % 2; 
}); 
console.log(arrTransformed); // [2, 4]
*/
/*
var arrTrans = args[1].filter(function(el) {
  var position = args[1].indexOf(el);  
});
 */
 
 var arr1 = args[0];
 var arr2 = args[1];
 for (var i = 0; arr1.length; i++) {
   var index1 = arr1[i];
   if (arr2.indexOf(index1) < 0) {
     returnArr.push(index1);
   }
 }
  
  for (var i = 0; i < arr2.length; i++) {
    var index2 = arr2[i]; 
    if (arr2.indexOf(index2) == -1) {
      returnArr.push(index2); 
    }  
  }

  for (var j = 0; j < arr2.length; j++) {
    var index2 = arr2[j]; 
    if (arr1.indexOf(index2) == -1) {
      newArr.push(index2); 
    }  
  }

  return returnArr;
}

sym([1, 2, 3], [5, 2, 1, 4]);
 
 
 /*
 function check() {
  for (var i = 0; i < args.length; i++) {
   args[i].forEach(function(element) {
     //cycles through all values of the argument arrays
     

    var present = (args.indexOf(element, 0));
    console.log(element + " is present at location " + present);
    if (present < 0) {
      returnArr.push(element);
      // args[i].splice(i,1);
      // args[1].splice(present,1);
    }
   });
  }
 }

 check();
 
 return returnArr;
*/






/*
function sym(args) {
  var returnArr = [];
  var argumentsLen = arguments.length;
  var next = arguments[1];
  for (var i = 0; i < argumentsLen; i++) {  
  
   function check(args) {
   
    args.forEach(function(element) {
     var present = next.indexOf(element, 0);
     if (present < 0) {
       returnArr.push(element);
     }  
    });
   } check(args);
  }
  
  
//  args.every(check, el);
  
//  return args;
}*/




/* forEach()
e.g. const arr = ['a', 'b', 'c'];
arr.forEach(function(element) {
    console.log(element);
});
*/


//arr.every(callback[, thisArg])

/* every()
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
*/

/* filter()
var arr = [1,2,3,4];
var arrTransformed = arr.filter(function(element/val, index, arr) {
  return index % 2; 
}); 
console.log(arrTransformed); // [2, 4]
*/





function sym(args) {
 // convert object to array of arrays
 var args = Array.prototype.slice.call(arguments);

 // get total number of arrays    
 var count = args.length;    
    
}

sym([1, 2, 3], [5, 2, 1, 4]);


/*-- PSEUDOCODE --*/


// reduce all arrays to single array
// remove all repaeated elements
    /* doesn't work because need to know if the element is in every array to count. */

// create empty array to return with result
// get first element of first array
// check if it 1) doesn't already exist in the new array, and 2) exists in every subsequent array
    // if yes, move to next element
    // if no, push to new array
/* doesn't work very well because it's hard to check first array against subsequent arrays */


// convert object to array of arrays
// get total number of arrays
// check each array for internal duplicates & remove (filter?)
// combine first two arrays
// check for duplicates and remove 
  // repeat until no more arrays remain
// return filtered array


/*-- ASSIGNMENT --*/

Symmetric Difference
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


Here are some helpful links:

Array.prototype.reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Symmetric Difference: https://www.youtube.com/watch?v=PxffSUQRkG4

sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.



