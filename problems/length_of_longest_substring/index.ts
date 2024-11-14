function lengthOfLongestSubstring(s: string): number {
  let start = 0;

  let maxSubStr = 0;

  const containingChars = {};

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (containingChars[char] !== undefined && containingChars[char] >= start) {
      start = containingChars[char] + 1;
    } else {
      maxSubStr = Math.max(maxSubStr, i - start + 1);
    }

    containingChars[char] = i;
  }

  return maxSubStr;
}
