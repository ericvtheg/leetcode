function decodeString(s: string): string {
  const stack: [string, string][] = [];
  let currentString = '';
  let currentMultiplier = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '[') {
      stack.push([currentMultiplier, currentString]);
      currentString = '';
      currentMultiplier = '';
    } else if (char === ']') {
      const [prevMultiplier, prevString] = stack.pop();
      currentString = prevString + currentString.repeat(Number(prevMultiplier));
    } else if (!Number.isNaN(Number(char))) {
      currentMultiplier += char;
    } else {
      currentString += char;
    }
  }

  return currentString;
}
