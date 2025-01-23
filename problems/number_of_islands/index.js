/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let numIslands = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (grid[row][col] === '1') {
        setIslandTo0(grid, row, col);
        numIslands += 1;
      }
    }
  }

  return numIslands;
};

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function setIslandTo0(grid, row, col) {
  const queue = [[row, col]];

  while (queue.length) {
    const [row, col] = queue.shift();
    grid[row][col] = '0';

    for (const [deltaRow, deltaCol] of directions) {
      const adjRow = row + deltaRow;
      const adjCol = col + deltaCol;
      if (grid[adjRow]?.[adjCol] === '1') {
        queue.push([adjRow, adjCol]);
        grid[adjRow][adjCol] = '0';
      }
    }
  }
}
