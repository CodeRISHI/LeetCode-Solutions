//Binary Tree Equality

// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Create a Binary Tree - value, left, right

// Helper function addChild

// Write function with two Binary Trees as inputs

  // Private function to traverse trees - input (A,B)
    // Base Case: if there are no more children
      //if(A === null && B === null)
      // return

    // Base Case: if depth or value is NOT equal for both Binary Trees
        //if(A === null || B === null || A.value !== B.value)
      // return false

    // Recursive Case: call private function
      // privateFunction(left childT1, left childT2 )
      // privateFunction(right childT1, right childT2)

var BinarySearchTree = function() {
  this.root = null;
};

var Node = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.addChild = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      }
      else {
        currentNode = currentNode.left;
      }
    }
    else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }
};

var checkBST = function(treeA, treeB) {
  if (treeA === null || treeB === null) {
    return false;
  }

  var _checkBST = function(nodeA, nodeB) {
    if (nodeA === null && nodeB === null) {
      return true;
    } else if (nodeA === null || nodeB === null || nodeA.value !== nodeB.value) {
      return false;
    } else {
      return (nodeA.value === nodeB.value && _checkBST(nodeA.left, nodeB.left) && _checkBST(nodeA.right, nodeB.right));
    }
  };

  return _checkBST(treeA.root, treeB.root);
};

// TEST
var bstA = new BinarySearchTree();
bstA.addChild(3);
bstA.addChild(2);
bstA.addChild(4);
bstA.addChild(1);
bstA.addChild(5);

console.log('bstA ', bstA);

var bstB = new BinarySearchTree();
bstB.addChild(3);
bstB.addChild(2);
bstB.addChild(4);
bstB.addChild(1);
bstB.addChild(5);

console.log('bstB ', bstB);

console.log(checkBST(bstA, bstB));

