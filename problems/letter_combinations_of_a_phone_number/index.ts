const numPad = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  const letters0 = numPad[digits[0]] ?? [];
  const letters1 = numPad[digits[1]] ?? [];
  const letters2 = numPad[digits[2]] ?? [];
  const letters3 = numPad[digits[3]] ?? [];

  const combinations = [];

  for (const l0 of letters0) {
    let str = l0;
    if (digits.length === 1) {
      combinations.push(str);
    }
    for (const l1 of letters1) {
      str = l0 + l1;
      if (digits.length === 2) {
        combinations.push(str);
      }
      for (const l2 of letters2) {
        str = l0 + l1 + l2;
        if (digits.length === 3) {
          combinations.push(str);
        }
        for (const l3 of letters3) {
          str = l0 + l1 + l2 + l3;
          combinations.push(str);
        }
      }
    }
  }

  return combinations;
}
