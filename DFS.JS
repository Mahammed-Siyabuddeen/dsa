class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function leftView(root) {
    const result = [];
    function traverse(node, level) {
        if (!node) return;

        // If this is the first node of the current level
        if (level === result.length) {
            result.push(node.val);
        }

        // Traverse left before right
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);
    return result;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(leftView(root)); // Output: [1, 2, 4]
