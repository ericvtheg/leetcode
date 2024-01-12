const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

function halvesAreAlike(s: string): boolean {
  const halfIdx = s.length / 2;

  let firstHalfVowels = 0;
  let secondHalfVowels = 0;
  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];
    const isVowel = vowels.has(letter);
    if (isVowel) {
      if (i < halfIdx) {
        firstHalfVowels += 1;
      } else {
        secondHalfVowels += 1;
      }
    }
  }
  return firstHalfVowels === secondHalfVowels;
}
