function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const queue: [number, number][] = [[sr, sc]];
  const visited: {[k in string]: boolean} = {};
  const originalColor = image[sr][sc];

  while (queue.length) {
    const [sr, sc] = queue.shift();

    image[sr][sc] = color;
    visited[`${sr},${sc}`] = true;

    [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ].forEach(([row, col]) => {
      if (image[sr + row] !== undefined) {
        if (image[sr + row][sc + col] !== undefined) {
          if (
            image[sr + row][sc + col] === originalColor
                      && !visited[`${sr + row},${sc + col}`]
          ) {
            queue.push([sr + row, sc + col]);
          }
        }
      }
    });
  }
  return image;
}
