function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  const result = new Array(candies.length);

  for (let i = 0; i < candies.length; i += 1) {
    const candy = candies[i];
    if (candy + extraCandies >= maxCandies) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
}
