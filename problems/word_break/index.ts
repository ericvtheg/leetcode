function wordBreak(s: string, wordDict: string[]): boolean {
  const cache = {};

  function recur(s: string) {
    if (s.length === 0) return true;

    for (const word of wordDict) {
      const subStr = s.slice(0, word.length);
      if (subStr === word) {
        const remainingStr = s.slice(word.length);
        if (cache[remainingStr] === false) continue;

        const result = recur(remainingStr);

        if (result) return true;
        cache[s] = false;
      }
    }
    return false;
  }

  return recur(s);
}
