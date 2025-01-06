/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNodeFactory(val) {
  if (val === null || val === undefined) {
    return null;
  }
  return new TreeNode(val);
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '';

  const bfs = [root];
  const ret = [root.val];

  while (bfs.length) {
    const node = bfs.shift();

    ret.push(node.left?.val ?? 'null');
    ret.push(node.right?.val ?? 'null');

    if (node.left) {
      bfs.push(node.left);
    }
    if (node.right) {
      bfs.push(node.right);
    }
  }

  return ret.join(',').toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '') {
    return null;
  }
  const parsedData = data
    .split(',')
    .map((d) => (d === 'null' ? null : parseInt(d)));

  const root = TreeNodeFactory(parsedData.shift());

  let pointerIdx = 0;
  const bfs = [
    [root, 'left'],
    [root, 'right'],
  ];

  while (bfs.length) {
    const [node, dir] = bfs.shift();

    if (dir === 'left') {
      node.left = TreeNodeFactory(parsedData[pointerIdx]);
      if (node.left) {
        bfs.push([node.left, 'left']);
        bfs.push([node.left, 'right']);
      }
    }
    if (dir === 'right') {
      node.right = TreeNodeFactory(parsedData[pointerIdx]);
      if (node.right) {
        bfs.push([node.right, 'left']);
        bfs.push([node.right, 'right']);
      }
    }

    pointerIdx += 1;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
