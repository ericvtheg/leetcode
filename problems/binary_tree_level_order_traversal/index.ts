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

// recursive
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  if (!root.left && !root.right) {
    return [[root.val]];
  }

  const left = levelOrder(root.left);
  const right = levelOrder(root.right);

  const maxDepth = Math.max(left.length, right.length);

  // merge levels
  const levels = [[root.val]];
  for (let i = 0; i < maxDepth; i += 1) {
    const leftAtIdx = left[i] ?? [];
    const rightAtIdx = right[i] ?? [];

    if (leftAtIdx.length || rightAtIdx.length) {
      levels.push([...leftAtIdx, ...rightAtIdx]);
    }
  }

  return levels;
}

// iterative
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const queue = [[root]];

  const ans = [];

  while (queue.length) {
    const level = queue.shift();
    const nextLevel: TreeNode[] = [];
    const ansLevel: number[] = [];

    level.forEach((node) => {
      ansLevel.push(node.val);

      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
    });

    ans.push(ansLevel);
    if (nextLevel.length) {
      queue.push(nextLevel);
    }
  }

  return ans;
}
