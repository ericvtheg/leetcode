function topKFrequent(words: string[], k: number): string[] {
  const count = {};
  for (const word of words) {
    count[word] = (count[word] ?? 0) + 1;
  }

  const countToWord = {};
  for (const [word, wordOcc] of Object.entries(count)) {
    const strWordOcc = wordOcc.toString();
    if (countToWord[strWordOcc]) {
      countToWord[strWordOcc].push(word);
      countToWord[strWordOcc].sort();
    } else {
      countToWord[strWordOcc] = [word];
    }
  }

  const ans = [];
  const orderedEntries = Object.entries(countToWord).sort(([a1, a2], [b1, b2]) => Number(b1) - Number(a1));

  for (const [key, words] of orderedEntries) {
    const typedWords = words as string[];
    for (let i = 0; i < typedWords.length; i++) {
      ans.push(typedWords[i]);
      if (ans.length === k) {
        return ans;
      }
    }
  }

  return ans;
}
