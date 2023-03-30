function maxSatisfaction(satisfaction: number[]): number {
  if (Math.max(...satisfaction) <= 0) {
    return 0;
  }

  satisfaction.sort((a, b) => a - b);
  let maxSum = 0;
  console.log(satisfaction);
  for (let j = 0; j < satisfaction.length; j++) {
    let sum = 0;
    for (let i = j; i < satisfaction.length; i++) {
      sum += ((i - j + 1) * satisfaction[i]);
    }
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}
