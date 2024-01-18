function climbStairs(n: number): number {
  if (n <= 3) {
    return n;
  }

  let prevPrev = 1;
  let prev = 2;
  let sum;

  for (let i = 2; i < n; i += 1) {
    sum = prevPrev + prev;
    prevPrev = prev;
    prev = sum;
  }

  return sum;
}
