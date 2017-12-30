
/* checks for existing items, updates their quantities, and adds new items to end of inventory */ 

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
   

 arr2.forEach(function(el, index) {
  var list = arr1;
  var item = el[1];
  console.log(item);
  // checks if the item already exists & updates the quantity
  for (var i = 0; i <= 3; i ++) {
   var loc = arr1[i].indexOf(item);
   if (loc > 0) {
     arr1[i][0] = arr1[i][0] + el[0]; 
     // removes item from new inventory list
     arr2.splice(index, 1);
   }  
  } 
});
// add all new items to exisiting inventory
 var inventory = arr1.concat(arr2);
 
 // alphabetize, then

 return inventory;

}


/* Way to sort alphabetically */

// create an array of all the types of items in newInv
var items = [];
newInv.forEach(function(el) {
  items.push(el[1]);
});

// sort the items in newInv alphabetically
var sorted = items.sort();

// check them against the items in curInv



/*-- PSEUDOCODE --*/

// check each item from second array against items in first array (indexOf?)
    // if item already exists, add value from second array to first array
    // if item doesn't exist, add it + value to first array
    // (not sure how to add it in the right position - maybe sort after the fact? but not sure that would look at second values in arrays)


/*-- ASSIGNMENT --*/

Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

Here are some helpful links:

Global Array Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

The function updateInventory should return an array.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].