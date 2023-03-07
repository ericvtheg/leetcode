function maxProfit(prices: number[]): number {
  let profit = 0;

  let prev = prices[0];
  let bought = -1;
  for (let i = 1; i < prices.length; i += 1) {
    const curPrice = prices[i];

    // if increased
    if (curPrice > prev && bought === -1) {
      bought = prev;
    }

    // if decreased
    if (curPrice < prev && bought !== -1) {
      profit += prev - bought;
      bought = -1;
    }

    prev = curPrice;
  }

  if (bought !== -1) {
    profit += prev - bought;
  }

  return profit;
}
