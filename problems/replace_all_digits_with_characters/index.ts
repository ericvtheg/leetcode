const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function replaceDigits(s: string): string {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isNaN(char as any)) {
      result += alphabet[alphabet.indexOf(s[i - 1]) + Number(char)];
    } else {
      result += char;
    }
  }
  return result;
}
