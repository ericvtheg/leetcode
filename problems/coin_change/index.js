/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i += 1) {
    for (const coin of coins) {
      dp[i] = Math.min(dp[i], 1 + (dp[i - coin] ?? Infinity));
    }
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
