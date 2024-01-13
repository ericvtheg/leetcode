function minSteps(s: string, t: string): number {
  const letters = {};
  let numLetters = s.length;
  for (const char of s) {
    letters[char] = 1 + (letters[char] ?? 0);
  }
  for (const char of t) {
    if (letters[char] && letters[char] > 0) {
      numLetters -= 1;
      letters[char] -= 1;
    }
  }

  return numLetters;
}
