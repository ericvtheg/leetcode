/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  let totalVolume = 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  while (left < right) {
    if (height[left] > height[right]) {
      right -= 1;
      rightMax = Math.max(height[right], rightMax);
      totalVolume += rightMax - height[right];
    } else {
      left += 1;
      leftMax = Math.max(height[left], leftMax);
      totalVolume += leftMax - height[left];
    }
  }

  return totalVolume;
};
