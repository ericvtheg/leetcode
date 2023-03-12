function numIslands(grid: string[][]): number {
  // traverse through grid
  // when 1 is found
  // traverse through all 1s, marking as visited

  const visited: {[k in string]: boolean} = {};
  let numIslands = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (grid[row][col] === '1'
              && !visited[`${row},${col}`]
      ) {
        numIslands += 1;
        visited[`${row},${col}`] = true;
        const islandQueue: [number, number][] = [[row, col]];

        while (islandQueue.length) {
          const [row, col] = islandQueue.shift();

          [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
          ].forEach(([rowDelta, colDelta]) => {
            const adjRow = row + rowDelta;
            const adjCol = col + colDelta;
            if (grid[adjRow] !== undefined
                          && grid[adjRow][adjCol] === '1'
                          && !visited[`${adjRow},${adjCol}`]
            ) {
              islandQueue.push([adjRow, adjCol]);
              visited[`${adjRow},${adjCol}`] = true;
            }
          });
        }
      }
    }
  }

  return numIslands;
}
