//Inverse Binary Tree

  //Invert a binary tree

var invertTree = function(root) {
  //declare temp variable to store value
  var temp = null;
  
  //edge case - if root is null
  if (root === null) {
    return null;
  }

  //base case
  if (!root.left && !root.right) {
    //return
    return root;
  } else {
    //store left in temp
    temp = root.left;
    //put right in left node
    root.left = root.right;
    //put temp in right node
    root.right = temp;

    //if left node is not null
    if (root.left !== null) {
      //recurse through left node
      invertTree(root.left);
    }
    //if right node is not null
    if (root.right !== null) {
      //recurse through right node
      invertTree(root.right);
    }
  }
  //return root
  return root;
};