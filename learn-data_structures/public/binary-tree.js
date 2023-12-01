"use strict";
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    // Insert node
    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return;
        }
        let current = this.root;
        while (current !== null) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = new TreeNode(value);
                    return;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = new TreeNode(value);
                    return;
                }
                current = current.right;
            }
        }
    }
    // In-order traversal
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
    // Print tree in-order
    printTree() {
        this.inOrderTraversal(this.root);
    }
}
// Usage
const myTree = new BinaryTree();
myTree.insert(5);
myTree.insert(2);
myTree.insert(8);
myTree.insert(1);
myTree.insert(3);
myTree.printTree(); // Output: 1, 2, 3, 5, 8
