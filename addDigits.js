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
    addDigits(sum);
  }
};

console.log(addDigits(38)); //2 --> returns //undefined
console.log(addDigits(9876)); //3 --> returns //undefined

//RETURNS UNDEFINED!
//not sure why it's doing that - the num that's being returned is a 'number' and I've console logged in several places to confirm that the actual value is '2' and '3' for the test case.