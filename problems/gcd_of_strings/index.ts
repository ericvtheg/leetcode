function gcdOfStrings(str1: string, str2: string): string {
  let divisor = str1.length > str2.length ? str2 : str1;

  while (divisor.length > 0) {
    if (str1.length % divisor.length !== 0 && str2.length % divisor.length) {
      divisor = divisor.slice(0, divisor.length - 1);
      continue;
    }

    let stringResult1 = '';
    for (let i = 0; i < str1.length; i += divisor.length) {
      stringResult1 += divisor;
    }
    let stringResult2 = '';
    for (let i = 0; i < str2.length; i += divisor.length) {
      stringResult2 += divisor;
    }

    if (stringResult2 === str2 && stringResult1 === str1) {
      return divisor;
    }

    divisor = divisor.slice(0, divisor.length - 1);
  }

  return '';
}
