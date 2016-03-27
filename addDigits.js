//Add Digits (258)

var addDigits = function(num) {
  //declare sum variable
  var sum = 0;
  
  //base case - if number is only one digit
  if (num.toString().length === 1) {
    //return the number
    return num;
  } else {
    //split num into array
    var arr = num.toString().split('');
  
    //iterate through array
    for (var i = 0; i < arr.length; i++) {
      //add digits
      sum += parseInt(arr[i]);
    }

    //recurse through num digits
    return addDigits(sum);
  }
};

console.log(addDigits(38)); //2 
console.log(addDigits(9876)); //3