function longestPalindrome(s: string): number {
  let result = 0;

  const sortedString = s.split('').sort();

  let prev: string | undefined;
  sortedString.forEach((letter) => {
    if (letter === prev) {
      result += 2;
      prev = undefined;
    } else if (letter !== prev) {
      prev = letter;
    }
  });

  if (result !== s.length) {
    result += 1;
  }

  return result;
}
