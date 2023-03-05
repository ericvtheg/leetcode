function isSubsequence(s: string, t: string): boolean {
  if (s === '') {
    return true;
  }

  let lookingForCharIdx = 0;

  for (let i = 0; i < t.length; i++) {
    const lookingForChar = s[lookingForCharIdx];

    const tChar = t[i];

    if (tChar === lookingForChar) {
      lookingForCharIdx += 1;
      if (lookingForCharIdx === s.length) {
        return true;
      }
    }
  }

  return false;
}
