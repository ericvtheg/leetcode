function scoreOfString(s: string): number {
  let sum = 0;
  let prev = s[0]
  for (let i = 1; i < s.length; i++) {
    const cur = s[i]
    sum += Math.abs(prev.charCodeAt(0) - cur.charCodeAt(0));
    prev = cur;
  }
  return sum;
};
