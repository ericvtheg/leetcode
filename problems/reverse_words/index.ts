function reverseWords(s: string): string {
  return s
    .split(' ')
    .filter((str) => str !== '')
    .reverse()
    .join(' ');
}
