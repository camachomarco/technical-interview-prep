var Node = /** @class */ (function () {
    function Node(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return Node;
}());
function specialInOrder(node, mirror) {
    if (node === null || mirror === null)
        return;
    // Traverse left subtree and its mirror (right subtree of mirror)
    specialInOrder(node.left, mirror.right);
    // Visit the current node and its mirror
    console.log(node.value, mirror.value);
    // Traverse right subtree and its mirror (left subtree of mirror)
    specialInOrder(node.right, mirror.left);
}
// Manually build the sample tree (for demonstration)
var root = new Node("a", new Node("b", new Node("d", new Node("h"), new Node("i")), new Node("e", new Node("j"), new Node("k"))), new Node("c", new Node("f", new Node("l"), new Node("m")), new Node("g", new Node("n"), new Node("o"))));
// Perform the special in-order traversal
specialInOrder(root, root);
