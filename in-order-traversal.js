function Tree(value) {
  this.left = null;
  this.right = null; 
  this.value = value; 
}

const tree = new Tree(10);
tree.left = new Tree(6);
tree.left.left = new Tree(3);
tree.left.right = new Tree(8);
tree.left.right.left = new Tree(7);

tree.right = new Tree(14);
tree.right.left = new Tree(12);
tree.right.right = new Tree(15);
tree.right.left.right = new Tree(13);
tree.right.left.right.right = new Tree(80)

function inOrderTraversal(tree) {
  if (tree.left) inOrderTraversal(tree.left)
  console.log(tree.value);
  if (tree.right) inOrderTraversal(tree.right);
}

// Next, try swap nodes