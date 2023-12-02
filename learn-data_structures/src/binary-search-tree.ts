class TreeNode<T> {
  constructor(public value: T, public left: TreeNode<T> | null = null, public right: TreeNode<T> | null = null) {}
}

type Node_<T> = TreeNode<T> | null;

class BinaryTree<T> {
  public root: TreeNode<T> | null = null;

  // Insert node
  insert(value: T): void {
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }
    let current: TreeNode<T> | null = this.root;
    while (current !== null) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = new TreeNode(value);
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new TreeNode(value);
          return;
        }
        current = current.right;
      }
    }
  }

  // In-order traversal (DFS)
  inOrderTraversal(node: TreeNode<T> | null): void {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  bfs(): void {
    // Use the optimised queue implementation
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr: TreeNode<T> | null = queue.shift()!;
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  search(root: TreeNode<T> | null, value: T): boolean {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Print tree in-order
  printTree(): void {
    this.inOrderTraversal(this.root);
  }

  isEmpty() {
    return this.root === null;
  }

  min(root: Node_<T>): T | null {
    if (!root) return null;
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root: Node_<T>): T | null {
    if (!root) return null;
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value: T) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node: Node_<T>, value: T) {
    if (node === null) {
      return node;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // here, value === node.value
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      node.value = this.min(node.right)!;
      node.right = this.deleteNode(node.right, node.value);
    }
    return node;
  }
}

// Usage
const myTree = new BinaryTree<number>();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(3);
myTree.insert(7);
myTree.printTree();

// myTree.bfs();

myTree.delete(5);

myTree.bfs();

myTree.inOrderTraversal(myTree.root);
