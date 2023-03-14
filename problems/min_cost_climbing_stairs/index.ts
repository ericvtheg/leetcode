function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;

  let first = cost[0];
  let second = cost[1];
  for (let i = 2; i < n; i++) {
    const temp = cost[i] + Math.min(second, first);
    first = second;
    second = temp;
  }

  return Math.min(first, second);
}
