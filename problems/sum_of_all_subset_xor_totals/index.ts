function subsetXORSum(nums: number[]): number {
  const xors: number[] = [];

  const backtrack = (xorVal: number, idx: number) => {
    xors.push(xorVal);
    for (let i = idx; i < nums.length; i++) {
      backtrack(xorVal ^ nums[i], i + 1);
    }
  };

  backtrack(0, 0);
  return xors.reduce((a, b) => a + b, 0);
}
