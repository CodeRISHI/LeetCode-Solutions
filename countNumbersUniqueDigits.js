//Count Numbers with Unique Digits (#357)

/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
*/

// HELPER FUNCTIONS
  // FACTORIAL
  var factorial = function(n) {
    if (n < 2) {
      return 1;
    } else {
    return n * factorial(n - 1);
    }
  };

  // CHECK
  var uniqDigits = function(n) {
    return (9 * factorial(9)) / (factorial(10 - n));
  };

  console.log(uniqDigits(2)); //81
  console.log(uniqDigits(3)); //648

var uniqueDigits = function(n) {
  if (n <= 1) {
    return Math.pow(10, n);
  } else  if (n === 2) {
    return (Math.pow(10, n) - Math.pow(3, n));
  } else {
    return (Math.pow(10, n) - (9 + (9 * (Math.pow(3, n) + 1))));
  }
};

// TEST
console.log(uniqueDigits(2));
console.log(uniqueDigits(3));
console.log(uniqueDigits(4));