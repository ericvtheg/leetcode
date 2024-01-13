const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let int = 0;
  let prevHighestIdx = -1;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const char = s[i];
    const romansIdx = romans.indexOf(char);

    if (romansIdx >= prevHighestIdx) {
      int += romanValues[char];
      prevHighestIdx = romansIdx;
    } else {
      int -= romanValues[char];
    }
  }

  return int;
}
