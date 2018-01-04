/* my solution */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
    for (var i = 0; i < arr.length; i++) {
    var object = arr[i];
    var alt = (object.avgAlt);
    var axis = alt + earthRadius; 
    var a = Math.pow(axis, 3); 
    var root = Math.sqrt(a/GM); 
    var period = Math.round(2 * Math.PI * root);
    object.orbitalPeriod = period;
    delete object.avgAlt;
  }
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


/* fcc intermediate solution */ 

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //Looping through each key in arr object
  for(var prop in arr) {
    //Rounding off the orbital period value
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
    //deleting the avgAlt property
    delete arr[prop].avgAlt;
    //adding orbitalPeriod property
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


/*-- PSEUDOCODE --*/


var axis = avgAlt + 6367.4447; //earth's radius 
var a = Math.pow(axis, 3); // Math.pow(base,exponent)
var root = Math.sqrt(a/398600.4418) // divided by gravitational force of earth
var period = Math.round(2 * Math.PI * root); 

// add this property to object (orbitalPeriod: period)
// remove avgAlt property from object (delete myobj.a;)



// Use Kepler's Third Law to calculate the orbital period

T = 2 * (pi) * the square root of ((earth's radius + avgAlt)^3 / GM)

where T = time in seconds & GM = earth's gravitational parameter (provided below).


/*-- ASSIGNMENT --*/

Map the Debris
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


Here are some helpful links:

Math.pow(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].