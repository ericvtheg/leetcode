function findAnagrams(s: string, p: string): number[] {
  const pLetterCount = countLetters(p);

  let leftPtr = 0;
  let rightPtr = p.length - 1;
  const currentLetterCount = countLetters(s.slice(leftPtr, rightPtr + 1));

  const ans = [];

  while (rightPtr < s.length) {
    const isEqual = compareLetters(currentLetterCount, pLetterCount);
    if (isEqual) {
      ans.push(leftPtr);
    }

    const leftPtrVal = s[leftPtr];
    currentLetterCount[leftPtrVal] -= 1;

    leftPtr += 1;
    rightPtr += 1;

    const rightPtrVal = s[rightPtr];
    currentLetterCount[rightPtrVal] = (currentLetterCount[rightPtrVal] ?? 0) + 1;
  }

  return ans;
}

function compareLetters(s: Record<string, number>, p: Record<string, number>) {
  for (const [key, val] of Object.entries(s)) {
    if (s[key] != p[key] && val != 0) {
      return false;
    }
  }
  return true;
}

function countLetters(p: string) {
  const letterCount = {};
  p.split('').forEach((letter) => {
    letterCount[letter] = 1 + (letterCount[letter] ?? 0);
  });
  return letterCount;
}
