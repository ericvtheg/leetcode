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
const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function intToRoman(num: number): string {
  let romanString = '';

  for (let i = 0; i < romans.length; i += 1) {
    const romanValue = romanValues[i];
    const romanNumeral = romans[i];

    while (romanValue <= num) {
      romanString += romanNumeral;
      num -= romanValue;
    }
  }

  return romanString;
}
