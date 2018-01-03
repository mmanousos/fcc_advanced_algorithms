/* final solution - doesn't require original checks for repeats or single character strings */ 


function permAlone(str) {
  var counter = 0;  // create variable to hold number of permutations without duplicates 
  var open = str.split(''); // split string into array to sort permutations
 
    // function to check for duplicates and count non duplicate permutations
 function findDupe(string) {  
 var dupeCheck = /(.)\1/gi; // look for duplicated characters (character immediately followed by itself)
 var repeatTest = dupeCheck.test(string); // tests if dupe exists in string T/F
  if (repeatTest !== true) { // if doesn't exist
    counter++; // increase counter by 1
    console.log("counter is " + counter);
  } 
 }

    // helper function to swap position of elements in an array
 function swap(array, posA, posB) {
   var temp = array[posA]; 
   array[posA] = array[posB]; 
   array[posB] = temp; 
 }
  
    
    //Heap's algorithm for generating permutations with the addition of joining the array back to a string (line 29) to then check for duplicates in the string (line 31)
  function permute(array, n) {
    n = n || array.length; 
    if (n === 1) {
     console.log(array);
    var merge = array.join('');
     console.log(merge);
    findDupe(merge);
    } else {
      for (var i = 1; i <= n; i += 1) {
       permute(array, n-1);
       if (n % 2) {
        var j = 1;     
       } else {
        var j = i; 
       } 
     swap(array, j-1, n-1);
    }
   }
  }
 permute(open);
 return counter;
}

permAlone('abc');


/* FCC basic solution, includes cleaner way to write the swap portion of Heap's algorithm */
// pushes joined arrays as strings into holder 'permutations' array to filter later. (inefficient because uses more memory?)


function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length); // *passes in length of the array as the integer in question for Heap's algorithm. presume this also passes in the array itself.

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
permAlone('aab');


/* corrected Heap's algorithm for accurate permutation outputs */ 


function permAlone(str) {
  var open = str.split('');
 
 function swap(array, posA, posB) {
   var temp = array[posA]; 
   array[posA] = array[posB]; 
   array[posB] = temp; 
 }
  
  function permute(array, n) {
    n = n || array.length; 
    if (n === 1) {
      console.log(array);
    } else {
      for (var i = 1; i <= n; i += 1) {
        permute(array, n-1);
        if (n % 2) {
          var j = 1;     
        } else {
          var j = i; 
        } 
      swap(array, j-1, n-1);
      }
    }
  }
permute(open);
}

permAlone('abc');



/* uses Heap's algorithm to generate all permutations */ 
// may make singleTest redundant

/* next step is to create check for non-duplicates and count those */ 

function permAlone(str) {
  var single = /^.{1}$/;
  var singleTest = single.test(str); 
  var first = str.charAt(0);
  if (singleTest === true) {
    return 1;
  }
  
//checks if string is all repeats 
  function allRepeats() { 
   for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === first) {
      return 0;
    }
   }
  }
  allRepeats(); 
  
//splits string into array separated by character
 var open = str.split('');    
   
// helper function to swap positions of items in an array    
 function swap(array, posA, posB) {
  var temp = array[posA]; 
  array[posA] = array[posB]; 
  array[posB] = temp; 
 }

// Heap's algorithm     
  function permute(array, n) {
    n = n || array.length; 
    if (n === 1) {
      return 1;
    } else {
      for (var i = 0; i < n-1; i++) {
        permute(array, n-1);
        if (n % 2 === 0) {
          var j = 1;     
        } else {
          var j = i; 
        }
      } swap(array, j-1, n-1);
    } 
  }
permute(open);
}

permAlone('aaa');






/* successfully checks for single characters & for all repeats */ 

function permAlone(str) {
  var single = /^.{1}$/;
  var singleTest = single.test(str); 
  var first = str.charAt(0);
  if (singleTest === true) {
    return 1;
  }
  
//checks if string is all repeats 
  function allRepeats() { 
   for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === first) {
      return 0;
    }
   }
  }
  allRepeats(); 
  
}

permAlone('aaa');


/*-- PSEUDOCODE --*/ 

If agument only contains repeated letters, return 0. 
If argument contains only 1 letter, return 1. 

If neither of those end the function, begin creating permutations of the String
Create an empty counter variable.  
For each variation, check if the permutation has repeated characters
    if it does not, increase the counter by 1. 
after permutations have completed, return counter. 


// pseudocode for Heap's algorithm for generating permutations

procedure generate(n : integer, A : array of any):
    if n = 1 then
          output(A)
    else
        for i := 0; i < n - 1; i += 1 do
            generate(n - 1, A)
            if n is even then
                swap(A[i], A[n-1])
            else
                swap(A[0], A[n-1])
            end if
        end for
        generate(n - 1, A)
    end if


/* doesn't help (purely coincidental) */ 
aabb = 4 characters with 2 repeats; answer = 2^3 


/*-- ASSIGNMENT --*/

No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


Here are some helpful links:

Permutations: https://www.mathsisfun.com/combinatorics/combinations-permutations.html
RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.



    
    