function runningSum(nums: number[]): number[] {
  const ans = Array(nums.length).fill(0);

  let prevSum = 0;
  nums.forEach((num, idx) => {
    const sum = prevSum + num;
    ans[idx] = sum;
    prevSum = sum;
  });

  return ans;
}
