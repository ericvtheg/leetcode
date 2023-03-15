function twoSum(nums: number[], target: number): number[] {
  const complement = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (complement[num] !== undefined) {
      return [i, complement[num]];
    }

    complement[target - num] = i;
  }
}
