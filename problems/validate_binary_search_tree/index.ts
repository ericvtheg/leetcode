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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  return rec_isValidBST(root, -Infinity, Infinity);
}

function rec_isValidBST(
  root: TreeNode | null,
  lessThanVal: number,
  greaterThanVal: number,
): boolean {
  if (!root) return true;

  if (root.left) {
    if (!(lessThanVal < root.left.val && root.left.val < root.val)) {
      return false;
    }
  }

  if (root.right) {
    if (!(root.val < root.right.val && root.right.val < greaterThanVal)) {
      return false;
    }
  }

  const isLeftValid = rec_isValidBST(root.left, lessThanVal, root.val);
  const isRightValid = rec_isValidBST(root.right, root.val, greaterThanVal);

  return isLeftValid && isRightValid;
}
