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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return;
  if (root.val === p.val || root.val === q.val) return root;

  const descendantNodeLeft = lowestCommonAncestor(root.left, p, q);
  const descendantNodeRight = lowestCommonAncestor(root.right, p, q);

  if (descendantNodeLeft && descendantNodeRight) {
    return root;
  } if (descendantNodeLeft) {
    return descendantNodeLeft;
  }
  return descendantNodeRight;
}
