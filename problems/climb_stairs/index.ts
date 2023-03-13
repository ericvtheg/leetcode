function climbStairs(n: number): number {
  if (n <= 2) return n;

  const dp = new Array(n);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i - 1] = dp[i - 2] + dp[i - 3];
  }
  return dp[n - 1];
}
