function maxArea(height: number[]): number {
  let maxArea = 0;

  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const minHeight = Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, minHeight * (j - i));

    if (height[j] <= height[i]) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return maxArea;
}
