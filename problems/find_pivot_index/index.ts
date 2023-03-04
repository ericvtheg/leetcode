function pivotIndex(nums: number[]): number {
  let pivotIndex = Infinity;
  let leftSum = 0;
  let rightSum = 0;

  // index -> rollingSum
  const rollingSumsLeft: {[x in string]: number} = {};
  const rollingSumsRight: {[x in string]: number} = {};

  let i = 0;
  let j = nums.length - 1;
  while (i < nums.length && j >= 0) {
    rollingSumsLeft[i] = leftSum;
    rollingSumsRight[j] = rightSum;

    if (leftSum === rollingSumsRight[i]) {
      pivotIndex = Math.min(i, pivotIndex);
    }
    if (rightSum === rollingSumsLeft[j]) {
      pivotIndex = Math.min(j, pivotIndex);
    }

    leftSum += nums[i];
    rightSum += nums[j];

    i += 1;
    j -= 1;
  }

  return pivotIndex === Infinity ? -1 : pivotIndex;
}
