function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length);
  const product = nums
    .filter((num) => num !== 0)
    .reduce((acc, num) => num * acc, 1);
  const zeroCount = nums.filter((i) => i === 0).length;

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (num === 0 && zeroCount === 1) {
      result[i] = product;
    } else if (zeroCount === 1) {
      result[i] = 0;
    } else if (zeroCount >= 2) {
      result[i] = 0;
    } else {
      result[i] = product / num;
    }
  }

  return result;
}
