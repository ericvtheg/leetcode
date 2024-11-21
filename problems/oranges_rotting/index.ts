const EMPTY = 0;
const FRESH = 1;
const ROTTEN = 2;
function orangesRotting(grid: number[][]): number {
  const queue: [number, number][] = [];

  let numFreshOranges = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      const orange = grid[row][col];
      if (orange === FRESH) {
        numFreshOranges += 1;
      } else if (orange === ROTTEN) {
        queue.push([row, col]);
      }
    }
  }

  let minutes = 0;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let newMinuteAt = queue.length - 1;
  let i = 0;
  while (queue.length && numFreshOranges > 0) {
    const [row, col] = queue.shift();

    for (const [dirRow, dirCol] of directions) {
      const adjRow = row + dirRow;
      const adjCol = col + dirCol;

      if (adjCol < 0 || adjCol >= grid[0].length) continue;
      if (adjRow < 0 || adjRow >= grid.length) continue;

      const orange = grid[adjRow][adjCol];
      if (orange === FRESH) {
        numFreshOranges -= 1;
        grid[adjRow][adjCol] = ROTTEN;
        queue.push([adjRow, adjCol]);
      }
    }

    if (i == newMinuteAt || numFreshOranges === 0) {
      minutes += 1;
      newMinuteAt = queue.length - 1;
      i = 0;
    } else {
      i += 1;
    }
  }

  return numFreshOranges > 0 ? -1 : minutes;
}
