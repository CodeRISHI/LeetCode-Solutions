//Intersection of Two Arrays (#349)

/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

var intersection = function(array1, array2) {
  var result = [];

  if (array1.length < array2.length) {
    array1.forEach(function(el) {
      for (var i = 0; i < array2.length; i++) {
        if (el === array2[i]) {
          result.push(el);
          break;
        }
      }
    });
  } else {
    array2.forEach(function(el) {
      for (var j = 0; j < array1.length; j++) {
        if (el === array1[j]) {
          result.push(el);
          break;
        }
      }
    });
  }
  return result;
};

// TEST
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [2, 4, 7];

console.log(intersection(arr1, arr2));
