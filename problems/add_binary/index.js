/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const maxLen = Math.max(a.length, b.length);

  let res = '';

  let carryOver = false;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    const top = a[i] ?? 0;
    const botom = b[j] ?? 0;

    if (top === '1' && botom === '1') {
      if (carryOver) {
        res = '1' + res;
      } else {
        carryOver = true;
        res = '0' + res;
      }
    } else if (top === '1' || botom === '1') {
      if (carryOver) {
        res = '0' + res;
      } else {
        res = '1' + res;
      }
    } else {
      if (carryOver) {
        res = '1' + res;
        carryOver = false;
      } else {
        res = '0' + res;
      }
    }
    j -= 1;
    i -= 1;
  }

  if (carryOver) {
    res = '1' + res;
    carryOver = false;
  }

  return res;
};
