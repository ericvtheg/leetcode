class TreeNode {
    val: number

    left: TreeNode | null

    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.left = (left === undefined ? null : left);
      this.right = (right === undefined ? null : right);
    }
}

// Recursive solution
// Time Complexity
// Time complexity: O(n)
// Space complexity: O(n)
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  if (!root.left && !root.right) {
    return [root.val];
  }

  let nodes = inorderTraversal(root.left);
  nodes.push(root.val);
  nodes = nodes.concat(inorderTraversal(root.right));

  return nodes;
}

// Iterative Solution
// Time complexity: O(n)
// Space complexity: O(n)
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const nodes = [];
  const queue = [root];

  while (queue.length) {
    root = queue[queue.length - 1];
    if (root.left) {
      queue.push(root.left);
      root.left = null;
    } else {
      nodes.push(root.val);
      queue.pop();

      if (root.right) {
        queue.push(root.right);
        root.right = null;
      }
    }
  }

  return nodes;
}
