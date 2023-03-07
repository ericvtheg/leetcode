function maxProfit(prices: number[]): number {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i += 1) {
    const curPrice = prices[i];
    min = Math.min(min, curPrice);
    profit = Math.max(curPrice - min, profit);
  }

  return profit;
}
