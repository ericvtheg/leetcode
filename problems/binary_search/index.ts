function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (true) {
    const middleIdx = Math.ceil((right + left) / 2);
    const middleVal = nums[middleIdx];

    if (middleVal === target) {
      return middleIdx;
    } if (middleVal > target) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }

    if (left > right || right < left) {
      return -1;
    }
  }
}
