function longestCommonPrefix(strs: string[]): string {
  let ans = '';
  const minLen = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLen; i++) {
    const letter = strs[0][i];
    for (const str of strs) {
      if (letter !== str[i]) {
        return ans;
      }
    }
    ans += letter;
  }

  return ans;
}
