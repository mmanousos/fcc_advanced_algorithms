
/*-- PSEUDOCODE --*/ 

If agument only contains repeated letters, return 0. 
If argument contains only 1 letter, return 1. 


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



    
    