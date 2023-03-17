function lastStoneWeight(stones: number[]): number {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const stone1 = stones.pop();
    const stone2 = stones.pop();

    if (stone1 !== stone2) {
      const result = stone1 - stone2;
      stones.push(result);
      stones.sort((a, b) => a - b);
    }
  }
  return stones[0] ?? 0;
}
