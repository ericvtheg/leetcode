/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(2);

  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i += 1) {
    dp[i % 2] = dp[(i - 1) % 2] + dp[(i - 2) % 2];
  }

  return dp[(n - 1) % 2];
};
