/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const grid = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (i === 0) {
        grid[i][j] = 1;
        continue;
      }

      if (j === 0) {
        grid[i][j] = 1;
        continue;
      }

      const above = grid[i - 1][j];
      const left = grid[i][j - 1];

      grid[i][j] = above + left;
    }
  }

  return grid[m - 1][n - 1];
};

// optimized, only need to look back at one row at a time
var uniquePaths = function (m, n) {
  const row = Array(n).fill(1);

  for (let i = 1; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (j === 0) {
        row[j] = 1;
        continue;
      }

      const above = row[j];
      const left = row[j - 1];

      row[j] = above + left;
    }
  }

  return row[n - 1];
};
