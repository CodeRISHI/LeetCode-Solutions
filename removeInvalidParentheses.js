//Remove Invalid Parentheses (#301)

/*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Examples:
"()())()" -> ["()()()", "(())()"]
"(a)())()" -> ["(a)()()", "(a())()"]
")(" -> [""]
*/

var removeInvalidParentheses = function(str) {
  // split incoming string
  var strArr = str.split('');

  // declare result array
  var result = [];

  // declare index variable
  var ind;

  // store parentheses and index
  var tuple = [];

  // declare temp array
  var tempArr = [];

  // loop through strArr
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === ')' && tempArr.length === 0) {
      tuple = [strArr[i], i];
      tempArr.push(tuple);    } else if (strArr[i] === ')') {
      // tempArr.splice(0, 1);
      tempArr.pop();    } else {
        tuple = [strArr[i], i];
        tempArr.push(tuple);
    }
  }

  // loop through strArr
  for (var j = 0; j < strArr.length; j++) {
    // if tempArr is empty
    if (tempArr.length === 0) {
      return strArr.join('');
    } else {
      for (var k = 0; k < tempArr.length; k++) {
        strArr.splice(tempArr[k][1], 1);
        tempArr.shift();
      }
    }
  }

  // add to result
  result = strArr.join('');

  // return result
  return result;
};

// TEST
console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses(')()()'));