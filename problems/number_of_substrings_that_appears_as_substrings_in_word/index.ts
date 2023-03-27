function numOfStrings(patterns: string[], word: string): number {
  let matches = 0;
  for (const pattern of patterns) {
    if (word.includes(pattern)) {
      matches += 1;
    }
  }
  return matches;
}
