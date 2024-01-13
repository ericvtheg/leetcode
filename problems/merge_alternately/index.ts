function mergeAlternately(word1: string, word2: string): string {
  let mergedString = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i += 1) {
    const char1 = word1[i] ?? '';
    const char2 = word2[i] ?? '';

    mergedString += char1 + char2;
  }

  return mergedString;
}
