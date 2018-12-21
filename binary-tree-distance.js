function bstDistance(values, n, node1, node2) {
  function buildBST(values) {
    // define Node
    function Node(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
    // recursive function to add a node to a tree
    function addNode(node, value) {
      if (value < node.value) {
        // left value already exists, recurse down to left node
        if (node.left) addNode(node.left, value);
        // left value does not exist, create new node
        else node.left = new Node(value);
      }
      else if (value > node.value) {
        // right value already exists, recurse down to right node
        if (node.right) addNode(node.right, value);
        // right value does not exist, create new node        
        else node.right = new Node(value);
      }
    }
    // initiate tree
    const top = new Node(values[0]);
    // iterate through values to create BST
    values.forEach((value) => {
      addNode(top, value);
    });
    // return completed BST
    return top;
  }

  function findDistance(tree, node1, node2) {
    // make sure node 1 is less than node 2. Otherwise flip
    if (node1 > node2) {
      const temp = node1;
      node1 = node2;
      node2 = temp;
    }
    function findParentNode(node) {
      if (node.value > node1 && node.value < node2) {
        return node;
      }
      if (node.value > node2) return findParentNode(node.left);
      else if (node.value < node1) return findParentNode(node.right);
    }
    function findHeight(tree, value) {
      if (tree.value === value) return 0;
      if (tree.value > value) return findHeight(tree.left, value) + 1;
      if (tree.value < value) return findHeight(tree.right, value) + 1;
    }
    const parentNode = findParentNode(tree, node1, node2);
    return findHeight(parentNode, node1) + findHeight(parentNode, node2);
  }

  const tree = buildBST(values);
  return findDistance(tree, node1, node2);
}

console.log(bstDistance([5,6,3,1,2,4], 6, 2, 4));