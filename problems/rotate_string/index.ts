function rotateString(s: string, goal: string): boolean {
  if (s === goal) return true;

  let i = 0;
  while (i < goal.length - 1) {
    s = s.slice(1) + s[0];

    if (s === goal) return true;
    i += 1;
  }

  return false;
}
