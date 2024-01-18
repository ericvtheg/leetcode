function maxOperations(nums: number[], k: number): number {
  const complementaryNumbers = {};
  let operations = 0;

  for (const num of nums) {
    if (num >= k) {
      continue;
    }

    const neededVal = k - num;
    if ((complementaryNumbers[neededVal] ?? 0) > 0) {
      operations += 1;
      complementaryNumbers[neededVal] -= 1;
    } else {
      complementaryNumbers[num] = (complementaryNumbers[num] ?? 0) + 1;
    }
  }

  return operations;
}
