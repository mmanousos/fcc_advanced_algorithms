/* refactored */ 

function telephoneCheck(str) {
 var format = /^(1\s?)?(\(\d{3}\)|\d{3})[\-|\s]?\d{3}[\-|\s]?\d{4}$/;
 return format.test(str);
}

telephoneCheck("1 55 555-5555");


/* RegExp parsed */

^(1\s?)?
--------
^ = looks at first character
1 = checks that the character is a 1
\s? = optional space 
inside closed parens followed by ? = whole argument is optional 

(\d{3}|\(\d{3}\))
----------------
\d{3} = must have 3 numerical characters
| = or 
\( = open parens 
\d{3} = followed by 3 numerical char
\) = followed by closed parens

[\-|\s]?
------------
inside brackets = can have either - or space 
? outside brackets = each are optional

    
\d{3}
-----
an additional 3 numerical characters

[\-\s]?
-------
followed by another optional dash or space

\d{4}$
------
4 numerical characters
$ = end of string (prevents additional trailing characters or too long strings)


/* first draft solution */ 
function telephoneCheck(str) {

// check if format of string matches x xxx-xxx-xxxx
// rules out preceding extra characters, non number entries, punctuation in the wrong place, incorrect digit breaks, or too long or short entries

  var format = /^\d?\s?\(?\d{3}\)?\-?\s?\d{3}\-?\s?\d{4}$/;
  var checkFormat = format.test(str);
  if (checkFormat == false) {
    return false;
  }
  
  // checks if )- exisits (invalid)
  var invalid = /\)-/;
  var checkInvalid = invalid.test(str);
  if (checkInvalid == true) {
    return false;
  }
  
  // checks if parens are paired 
  // if a parens exists, check if the other is there too
  var paren = /\(/;
  var secParen = /\)/;
  var checkParen = paren.test(str); 
  var checkSecParen = secParen.test(str);
  if ((checkParen == true) || (checkSecParen == true)) {
  if ((checkParen == false) || (checkSecParen == false)) {
    return false;
   }
  }
  
  // checks that the country code is 1 for USA
  var getDig = str.replace(/\D/g, "");
  var len = getDig.length;
  if (len == 11) {
    var first = /^1/;
    var firstCheck = first.test(getDig);
    return firstCheck;
  }
  
  return true;
}



telephoneCheck("1 55 555-5555");

/*-- PSEUDOCODE --*/

// receive a string
// get \d & check length: if > 10 or < 9, return false
// check if contains characters other than -(), spaces or numbers
    // if so, return false
// if 10 digits and first digit is other than 1, return false

// also need to check that - and () are in correct places

/*-- ASSIGNMENT --*/

Validate US Telephone Numbers
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


Here are some helpful links:

RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6505552368)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false.
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.