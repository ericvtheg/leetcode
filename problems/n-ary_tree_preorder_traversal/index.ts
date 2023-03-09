class Node {
    val: number

    children: Node[]

    constructor(val?: number) {
      this.val = (val === undefined ? 0 : val);
      this.children = [];
    }
}

function preorder(root: Node | null): number[] {
  if (!root) return [];

  return [root.val, ...root.children.map((node: Node) => preorder(node)).flat(1)];
}

// faster but less clean imo
function preorder(root: Node | null): number[] {
  if (!root) return [];

  return dfs(root, []);
}

function dfs(root: Node, arr: number[]): number [] {
  arr.push(root.val);

  root.children.forEach((node) => {
    dfs(node, arr);
  });
  return arr;
}
