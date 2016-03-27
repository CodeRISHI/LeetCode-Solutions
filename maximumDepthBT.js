//Maximum Depth of Binary Tree

  //Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//Binary Tree Constructor
var binarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

var root = new binarySearchTree();

var maxDepth = function(root) {
  //if no root - base case
  if (root === null) {
    return 0;
  } else {
    //find depth of left node
    var leftNodeDepth = maxDepth(root.left);
    //find dpeth of right node
    var rightNodeDepth = maxDepth(root.right);

    //compare depths
    if (leftNodeDepth > rightNodeDepth) {
      //return depth of left node
      return (leftNodeDepth + 1);
    } else {
      //return depth of right node
      return (rightNodeDepth + 1);
    }
  }
};

console.log(maxDepth(root));