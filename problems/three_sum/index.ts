function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        triplets.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) left += 1;
      }
    }
  }

  return triplets;
}
