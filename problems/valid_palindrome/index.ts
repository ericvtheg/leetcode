function isLetter(char: string) {
  return (((char.toUpperCase() !== char.toLowerCase()) || Number.isInteger(+char)) && char !== ' ');
}

function isPalindrome(s: string): boolean {
  const newString = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isLetter(char)) {
      newString.push(char.toLowerCase());
    }
  }

  let end = newString.length - 1;
  let start = 0;
  while (start <= end) {
    if (newString[start] !== newString[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
}
