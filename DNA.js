// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// For example,

// Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

// Return:
// ["AAAAACCCCC", "CCCCCAAAAA"].

var strCheck = function(arr) {
  var results = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i+10; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        results.push(arr[i]);
      }
    }
    // console.log('arr[i] ', arr[i], '\narr[j] ', arr[j]);
  }
  return results;
};

var dna = function(str) {
  var tempArr = [];

  for (var i = 0; i < str.length; i++) {
    tempArr.push(str.slice(i, i+10));
  }

  // console.log('tempArr ', tempArr);

  return strCheck(tempArr);
};

// TEST
console.log(dna("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // [ 'AAAAACCCCC', 'CCCCCAAAAA' ]