// Time complexity: O(m*n)
// Space complexity: O(m*n)
function uniquePaths(m: number, n: number): number {
  const grid = [...Array(m)].map((e) => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        grid[i][j] = 1;
      } else {
        const top = grid[i - 1]?.[j] ?? 0;
        const left = grid[i][j - 1] ?? 0;
        grid[i][j] = top + left;
      }
    }
  }

  return grid[m - 1][n - 1];
}

// Time complexity: O(m * n)
// Space complexity: O(n)
function uniquePaths(m: number, n: number): number {
  let prev = new Array(n).fill(1);
  let cur = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] = prev[j] + cur[j - 1];
    }
    const temp = prev;
    prev = cur;
    cur = temp;
  }

  return prev[n - 1];
}

// Time complexity: O(m * n)
// Space complexity: O(n)
// slight memory improvement here
function uniquePaths(m: number, n: number): number {
  const cur = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] += cur[j - 1];
    }
  }

  return cur[n - 1];
}
