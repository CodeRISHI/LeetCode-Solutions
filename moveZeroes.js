var moveZeroes = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(JSON.parse(nums.splice(i, 1).join('')));
    }
  }
  console.log(nums);
  return nums;
};

//TEST
var nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums)); //[1, 3, 12, 0, 0]

console.log(moveZeroes([0, 1, 0])); //[1, 0, 0]