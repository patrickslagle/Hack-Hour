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

function findHeight(tree) {
  let LH = 0;
  let RH = 0; 
  if (tree.left) {
    LH += findHeight(tree.left) + 1;
  }
  if (tree.right) {
    RH += findHeight(tree.right) + 1;
  }
  return Math.max(LH, RH)
}

console.log(findHeight(tree));