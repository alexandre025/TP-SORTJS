"use strict";

var myArray = [9, 10, 3, 5, 8, 4, 6, 2, 1, 7];

var requireChange = true;

while (requireChange == true) {
  var index = 0;

  requireChange = false;

  while (index < myArray.length) {
    if (myArray[index] > myArray[index + 1]) {
      var tmp = myArray[index];
      myArray[index] = myArray[index + 1];
      myArray[index + 1] = tmp;
      requireChange = true;
    }
    console.log(myArray);
    index++;
  }
}
