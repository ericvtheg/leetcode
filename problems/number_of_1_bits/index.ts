function hammingWeight(n: number): number {
  //11 -> 1011
  //2^0 = 1
  //2^1 = 2
  //2^2 = 4
  //2^3 = 8

  let weight = 0;
  let exp = 31;

  while (exp >= 0 && n !== 0) {
    const twoToTheExp = 2 ** exp;
    if (twoToTheExp <= n) {
      weight += 1;
      n -= twoToTheExp;
    }
    exp -= 1;
  }

  return weight;
}
