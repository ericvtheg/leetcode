/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

var updateMatrix = function (mat) {
  const queue = []; //Row, Col, distance
  const visited = new Set();

  for (let row = 0; row < mat.length; row += 1) {
    for (let col = 0; col < mat[0].length; col += 1) {
      const val = mat[row][col];
      if (val === 0) {
        queue.push([row, col, 0]);
        visited.add(`${row},${col}`);
      } else {
        mat[row][col] = Infinity;
      }
    }
  }

  while (queue.length) {
    const [row, col, dis] = queue.shift();
    mat[row][col] = Math.min(mat[row][col], dis);
    visited.add(`${row},${col}`);

    directions.forEach(([rowDelta, colDelta]) => {
      const nextRow = row + rowDelta;
      const nextCol = col + colDelta;
      if (
        0 <= nextRow &&
        0 <= nextCol &&
        mat.length > nextRow &&
        mat[0].length > nextCol
      ) {
        if (!visited.has(`${nextRow},${nextCol}`)) {
          queue.push([nextRow, nextCol, dis + 1]);
        }
      }
    });
  }

  return mat;
};
