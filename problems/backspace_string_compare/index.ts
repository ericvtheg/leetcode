const BACKSPACE_CHAR = '#';

function backspaceCompare(s: string, t: string): boolean {
  return removeChars(s) === removeChars(t);
}

function removeChars(s: string): string {
  let deletes = 0;
  for (let i = s.length - 1; i >= 0 && s.length > 0; i--) {
    const char = s[i];

    if (char === BACKSPACE_CHAR) {
      deletes += 1;
      s = s.slice(0, i) + s.slice(i + 1);
    } else if (deletes > 0) {
      s = s.slice(0, i) + s.slice(i + 1);
      deletes -= 1;
    }
  }
  return s;
}
