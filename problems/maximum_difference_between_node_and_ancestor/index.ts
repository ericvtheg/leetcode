/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diff(a: number, b: number) {
  return Math.abs(a - b);
}

function maxAncestorDiffRecur(
  root: TreeNode | null,
  minAncestor: number,
  maxAncestor: number
): number {
  if (!root) {
    return 0;
  }

  const curValue = root.val;
  const maxDiff = Math.max(
    diff(minAncestor, curValue),
    diff(maxAncestor, curValue)
  );

  const newMinAncestor = Math.min(root.val, minAncestor);
  const newMaxAncestor = Math.max(root.val, maxAncestor);

  const leftMaxDiff = maxAncestorDiffRecur(
    root.left,
    newMinAncestor,
    newMaxAncestor
  );
  const rightMaxDiff = maxAncestorDiffRecur(
    root.right,
    newMinAncestor,
    newMaxAncestor
  );

  return Math.max(maxDiff, leftMaxDiff, rightMaxDiff);
}

function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const minAncestor = root.val;
  const maxAncestor = root.val;

  const leftMaxDiff = maxAncestorDiffRecur(root.left, minAncestor, maxAncestor);
  const rightMaxDiff = maxAncestorDiffRecur(
    root.right,
    minAncestor,
    maxAncestor
  );

  return Math.max(leftMaxDiff, rightMaxDiff);
}
