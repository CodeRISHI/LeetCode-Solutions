//singleNumberIII.js

// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
// Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

var singleNumberIII = function(arr) {
  var hash = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var count = 1;
    if (hash[arr[i]]) {
      count++;
    }
    hash[arr[i]] = count;
  }

  for (var key in hash) {
    if (hash[key] === 1) {
      result.push(parseInt(key));
    }
  }
  return result;
};

console.log(singleNumberIII([1, 2, 1, 3, 2, 5]));

