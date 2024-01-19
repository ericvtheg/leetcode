function findMaxAverage(nums: number[], k: number): number {
  let i = 0;
  let j = k - 1;
  let maxAverage;
  let curAverage = maxAverage;
  while (j < nums.length) {
    if (maxAverage === undefined) {
      maxAverage = nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0) / k;
      curAverage = maxAverage;
    } else {
      const prevNum = nums[i - 1];
      const newNum = nums[j];

      curAverage -= prevNum / k;
      curAverage += newNum / k;

      maxAverage = Math.max(curAverage, maxAverage);
    }
    i += 1;
    j += 1;
  }

  return maxAverage;
}
