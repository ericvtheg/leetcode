function diagonalSum(mat: number[][]): number {
  /*
      [0,0] + [1,1] + [2,2]
      [0,2] + [1,1] + [2,0]
  */

  // diagonal 1
  let d1X = 0;
  let d1Y = 0;

  // diagonal 2
  let d2X = mat[0].length - 1;
  let d2Y = 0;

  const isInBound = () => d1Y < mat.length;

  let sum = 0;
  while (isInBound()) {
    sum += mat[d1Y][d1X];
    sum += mat[d2Y][d2X];

    if (d1Y === d2Y && d1X === d2X) {
      sum -= mat[d2Y][d2X];
    }

    d1X += 1;
    d1Y += 1;

    d2X -= 1;
    d2Y += 1;
  }

  return sum;
}

const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
diagonalSum(mat);
