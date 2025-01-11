/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let j = 0;

  let sum = 0;
  let maxSum = -Infinity;

  while (j < nums.length) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[j];
    maxSum = Math.max(sum, maxSum);
    j += 1;
  }

  return maxSum;
};
