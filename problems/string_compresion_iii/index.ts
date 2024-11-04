function compressedString(word: string): string {
  const MAX_REOCCUR_CHAR_COMPRESSION_LENGTH = 9;
  let comp = '';

  let char = word[0];
  let charOccurrences = 0;

  for (let i = 0; i < word.length; i += 1) {
    const curChar = word[i];
    if (
      char === curChar &&
      charOccurrences < MAX_REOCCUR_CHAR_COMPRESSION_LENGTH
    ) {
      charOccurrences += 1;
    } else {
      comp += `${charOccurrences}${char}`;
      charOccurrences = 1;
      char = curChar;
    }
  }

  comp += `${charOccurrences}${char}`;
  return comp;
}
