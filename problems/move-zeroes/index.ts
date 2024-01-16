/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 1;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      i += 1;
      j = i + 1;
      continue;
    }

    let isOnlyZerosAtEnd = true;
    while (j < nums.length) {
      if (nums[j] !== 0) {
        isOnlyZerosAtEnd = false;
      }
      nums[j - 1] = nums[j];
      nums[j] = 0;
      j += 1;
    }

    j = i + 1;

    if (isOnlyZerosAtEnd) {
      return;
    }
  }
}
