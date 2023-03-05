function isIsomorphic(s: string, t: string): boolean {
  const sMapping = {};
  const tMapping = {};

  for (let i = 0; i < s.length; i += 1) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMapping[sChar]) {
      if (sMapping[sChar] !== tChar) {
        return false;
      }
    } else {
      sMapping[sChar] = tChar;
    }

    if (tMapping[tChar]) {
      if (tMapping[tChar] !== sChar) {
        return false;
      }
    } else {
      tMapping[tChar] = sChar;
    }
  }
  return true;
}
