'use strict'

var countingBits = (n) => {
  //declare counter var
  let counter = 0;

  //declare result arr
  let result = [];

  //convert number to binary
  let bin = n.toString(2);

  console.log('bin ', bin);

  //loop through
  for (var i = 0; i < bin.length; i++) {
    //check if bin[i] is 1
    if (bin[i] === '1') {
      //increment counter
      counter++;
      //push into result at i
      result.push(counter);
    }
  }
  //return result
  return result;
};

console.log(countingBits(8));