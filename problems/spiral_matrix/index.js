/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const directions = [
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
  [-1, 0], //up
];

var spiralOrder = function (matrix) {
  const res = [];

  const visited = new Set();

  function recur(y, x, directionChangeCount) {
    if (visited.has(`${y},${x}`) || matrix[y]?.[x] === undefined) {
      return;
    }

    res.push(matrix[y][x]);
    visited.add(`${y},${x}`);

    let dir = directionChangeCount % 4;

    if (
      matrix[y + directions[dir][0]]?.[x + directions[dir][1]] === undefined
    ) {
      directionChangeCount += 1;
    } else if (
      visited.has(`${y + directions[dir][0]},${x + directions[dir][1]}`)
    ) {
      directionChangeCount += 1;
    }

    dir = directionChangeCount % 4;

    y += directions[dir][0];
    x += directions[dir][1];

    return recur(y, x, directionChangeCount);
  }

  recur(0, 0, 0);

  return res;
};
