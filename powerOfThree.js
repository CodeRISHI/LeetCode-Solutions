//Power of Three (#326)

/*
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

var func = function(n) {
  var x;

  x = Math.pow(n, (1/3));

  return (x % 1 === 0) ? true : false;
};

// TEST
console.log(func(27)); // true
console.log(func(9)); // false
