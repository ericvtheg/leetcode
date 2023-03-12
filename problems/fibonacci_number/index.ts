// F(n) = F(n - 1) + F(n - 2)
// F(0) = 0, F(1) = 1
function fib(n: number): number {
  if (n <= 1) return n;

  const dp = new Array(2);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i += 1) {
    dp[i % 2] = dp[(i - 1) % 2] + dp[(i - 2) % 2];
  }

  return dp[n % 2];
}
