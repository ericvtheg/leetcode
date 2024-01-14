const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

function reverseVowels(s: string): string {
  let i = 0;
  let j = s.length - 1;

  const sArr = s.split('');

  while (i < j) {
    const iIsVowel = VOWELS.has(sArr[i]);
    const jIsVowel = VOWELS.has(sArr[j]);

    if (iIsVowel && jIsVowel) {
      const temp = sArr[i];
      sArr[i] = sArr[j];
      sArr[j] = temp;
      i += 1;
      j -= 1;
    } else if (!iIsVowel) {
      i += 1;
    } else if (!jIsVowel) {
      j -= 1;
    }
  }

  return sArr.join('');
}
