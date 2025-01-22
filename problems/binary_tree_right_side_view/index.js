/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const output = [];

  function recur(root, height) {
    if (!root) {
      return;
    }

    if (output[height] === undefined) {
      output.push(root.val);
    }

    recur(root.right, height + 1);
    recur(root.left, height + 1);
  }

  recur(root, 0);

  return output;
};
