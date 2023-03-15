function characterReplacement(s: string, k: number): number {
  if (s.length <= k) return s.length;
  if (s.length === 1) return s.length;

  const ASCII_OFFSET = 65;
  const letters = new Array(26).fill(0);

  let leftPtr = 0;
  let rightPtr = 1;

  const rightCharCode = s.charCodeAt(rightPtr) - ASCII_OFFSET;
  letters[rightCharCode] += 1;
  const leftCharCode = s.charCodeAt(leftPtr) - ASCII_OFFSET;
  letters[leftCharCode] += 1;

  const totalOcurringLetters = s.length;
  const maxOccurringLetter = Math.max(...letters);
  let ans = maxOccurringLetter + Math.min(k, totalOcurringLetters - maxOccurringLetter);
  while (rightPtr < s.length) {
    let maxOccurringLetter = Math.max(...letters);
    if ((rightPtr - leftPtr + 1) - maxOccurringLetter <= k) {
      rightPtr += 1;
      const rightCharCode = s.charCodeAt(rightPtr) - ASCII_OFFSET;
      letters[rightCharCode] += 1;
    } else {
      const leftCharCode = s.charCodeAt(leftPtr) - ASCII_OFFSET;
      letters[leftCharCode] -= 1;
      leftPtr += 1;
    }

    maxOccurringLetter = Math.max(...letters);
    ans = Math.max(ans, maxOccurringLetter + Math.min(k, totalOcurringLetters - maxOccurringLetter));
  }

  return ans;
}
