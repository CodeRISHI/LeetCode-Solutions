//Single Number (136)

var singleNumber = function(nums) {
  //declare result var
  var result = null;

  //sort array
  var results = nums.sort(function(a, b) {
      return a - b;
  });
    
  //temp array to store duplicates
  var tempArr = [];
    
  //edge case
  if (results.length === 1) {
      return results[0];
  }
  
  //iterate through array and check for duplicates
  for (var i = 0; i < results.length; i++) {
      //if contiguous numbers are duplicates
    if (results[i+1] === results[i]) {
      //push into tempArr
      tempArr.push(results[i]);
      //remove duplicates in results
      results.splice(i, 1);
    }
  }

  //compare tempArr and results
  for (var j = 0; j < tempArr.length; j++) {
    //check if value exists in tempArr
    if (tempArr.indexOf(results[j]) === -1) {
      //odd one out is result
      result = results[j];
    }  
  }
    
  return result;
};

//TESTS
console.log(singleNumber([1])); //1
console.log(singleNumber([1,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,9])); //5
console.log(singleNumber([3, 6, 3, 1, 5, 7, 4, 2, 1, 4, 9, 7, 9, 8, 8, 6, 2])); //5

