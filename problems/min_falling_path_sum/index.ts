function minFallingPathSum(matrix: number[][]): number {
  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const potentialValues = [
        matrix[i - 1][j - 1],
        matrix[i - 1][j],
        matrix[i - 1][j + 1],
      ];
      matrix[i][j] += Math.min(
        ...potentialValues.filter((val) => val !== undefined),
      );
    }
  }

  return Math.min(...matrix[matrix.length - 1]);
}
