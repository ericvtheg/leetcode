const romans = [
  'I',
  'IV',
  'V',
  'IX',
  'X',
  'XL',
  'L',
  'XC',
  'C',
  'CD',
  'D',
  'CM',
  'M',
].reverse();
const romanValues = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function intToRoman(num: number): string {
  let romanString = '';

  for (const romanNumeral of romans) {
    const romanValue = romanValues[romanNumeral];
    while (romanValue <= num) {
      romanString += romanNumeral;
      num -= romanValue;
    }
  }

  return romanString;
}
