
/* first part of logic - getting value of change needed & assessing how much cash is in the drawer */ 
function checkCashRegister(price, cash, cid) {
  var changeNeeded = (cash - price);
  
  var cashOnHand = 0;
  cid.forEach(function(el) {
    var val = el[1];
    cashOnHand = val + cashOnHand;
  });
  
  if (changeNeeded === cashOnHand) {
    return "Closed";
  } else if (changeNeeded > cashOnHand) {
    return "Insufficient Funds";
  } else {
    return "here is your change";
    // algorithm to cycle through array checking value against cash on hand 
      // ONE HUNDRED = 100.00, TWENTY = 20.00, TEN = 10.00, FIVE = 5.00, ONE = 1.00, QUARTER = .25, DIME = .10, NICKEL = .05, PENNY = .01 
      // map array to these values, divide the currency available by those values to get number on hand
      // e.g. for [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]] => 100.00 = 1, 20.00 = 3, 10.00 = 2, 5.00 = 11, 1.00 = 90, .25 = 17, .10 = 31, .05 = 41, .01 = 101  
      
    var value = [.01, .05, .10, .25, 1.00, 5.00, 10.00, 20.00, 100.00];  

    //function howMany() {   
     for (var i = 0; i<cid.length; i++) {
      cid[i][1] = Math.round(cid[i][1]/value[i]);
     }
    //}
    //howMany();
    
  }
}



checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);



/*-- PSEUDOCODE --*/

// deduct 'price' from 'cash' 
    // difference is change needed
// total all values in 'cid' array
// check difference between change needed & 'cid' total
    // if change needed > 'cid' total, return 'insufficient funds'
    // if change needed === 'cid' total, return 'closed'
    // else return exact change in highest to lowest order (use as many of the highest value array items as are available before moving on to next highest value)


/*-- ASSIGNMENT --*/

Exact Change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Here are some helpful links:

Global Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".