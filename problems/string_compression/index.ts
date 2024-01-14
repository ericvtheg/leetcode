function compress(chars: string[]): number {
  let prevChar;
  let startCharIdx = 0;
  let charCount = 0;
  for (let i = 0; i < chars.length + 1; i += 1) {
    const char = chars[i];
    if ((char !== prevChar && prevChar !== undefined) || char === undefined) {
      const charCountStr = charCount > 1 ? charCount.toString() : '';
      chars.splice(startCharIdx, 1, prevChar, ...charCountStr.split(''));
      i += charCountStr.length;
      startCharIdx += charCountStr.length + 1;
      charCount = 0;
    }

    prevChar = char;
    charCount += 1;
  }

  return startCharIdx;
}
