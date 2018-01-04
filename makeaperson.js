/* my solution */ 

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    
    var fullName = firstAndLast;

    this.getFullName = function() {
      return fullName;
    };
    
    this.getFirstName = function() {
      var broken = fullName.split(' ');
      return broken[0];
    };
    
    this.getLastName = function() {
     var broken = fullName.split(' ');
      return broken[1];
    };
    
    this.setFirstName = function(first) {
      var broken = fullName.split(' ');
      fullName = first + " " + broken[1];
      return fullName;
    };
    
    this.setLastName = function(last) {
      var broken = fullName.split(' ');
      fullName = broken[0] + " " + last;
      return fullName;
    };

    this.setFullName = function(firstAndLast) {
     fullName = firstAndLast;
     return fullName;
    }; 
};

var bob = new Person('Bob Ross');

/* fcc solution */
// a little more streamlined (fewer variables created)

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

/* a solution that doesn't pass the tests */
// doesn't return new full names after setting new names */ 
// also does too many things (creating too many arrays)

var Person = function(firstAndLast) {
    
    var fullName = firstAndLast;
    var broken = fullName.split(' ');
    console.log(broken);
    var firstName = broken[0];
    var lastName = broken[1];
    var nameArr = [firstName, lastName];
    /*this.Person = {
      firstName: broken[0],
      lastName: broken[1]
    };*/

    this.getFullName = function() {
      var merged = nameArr.join(' ');
      merged.replace(/[,]\s/);
      return merged;
    };
    
    this.getFirstName = function() {
      return nameArr[0];
    };
    
    this.getLastName = function() {
     return nameArr[1];
    };
    
    this.setFirstName = function(first) {
      nameArr[0] = first;
      return nameArr[0];
    };
    
    this.setLastName = function(last) {
      nameArr[1] = last;
      return nameArr[1];
    };

    this.setFullName = function(firstAndLast) {
     var full = firstAndLast;
     var torn = full.split(' ');
     nameArr[0] = torn[0];
     nameArr[1] = torn[1];
     var merge = nameArr.join(' ');
     merged.replace(/[,]\s/);
     return merged;
    }; 
};

var bob = new Person('Bob Ross');

//bob.getFirstName();
//bob.getLastName();
//bob.getFullName();
bob.setFirstName("Haskell");
//bob.setLastName("Curry");
//bob.getFullName();




/* some work */

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    
 var fullName = firstAndLast;
  console.log(fullName);
 var broken = fullName.split(' ');  
   console.log(broken);
   console.log("the broken first string is " + broken);
    
 this.getFullName = function() {
  return fullName;
 };
    
 this.getFirstName = function() {
  return broken[0]; 
 };
    
 this.getLastName = function() {
  return broken[1]; 
 };
    
 this.setFirstName = function(first) {
  return broken[0] = first;
 };
    
 this.setLastName = function(last) {
  return broken[1] = last;
 };
    
 this.setFullName = function(firstAndLast) {
  var full = firstAndLast;
  var torn = full.split(' ');
  broken[0] = torn[0];
  broken[1] = torn[1];
  var merged = broken.join(' ');
  merged.replace(/[,]\s/);
  return merged;
 };


};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.setFirstName(first);
bob.setLastName(last);
bob.setFullName(firstAndLast);



/*-- ASSIGNMENT --*/

Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Here are some helpful links:

Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Details of the Object Model: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").