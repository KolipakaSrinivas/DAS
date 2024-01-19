// level 0: 2▽0 = 1;
// level 1: 2▽1 = 2;
// level 2: 2▽2 = 4;
// level 3: 2▽3 = 8;

class Node {
  constructor(value) {
    (this.right = null), (this.left = null), (this.value = value);
  }
}

// 100 => 20

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        // left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        //right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if( value < currentNode.value){
        currentNode =currentNode.left
      }else if( value > currentNode.value ) {
        currentNode = currentNode.right
      }else if(currentNode.value === value) {
        return currentNode
      }
    }
    return false
  }
}

const tree = new BinaryTree();
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
console.log(tree.lookup(6));

console.log(tree);
