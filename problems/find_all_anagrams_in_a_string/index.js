/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) {
    return [];
  }

  let i = 0;
  let j = 0;
  const offset = 'a'.charCodeAt(0);
  const chars = new Array(26).fill(0);
  for (const c of p) {
    chars[c.charCodeAt(0) - offset] += 1;
  }

  const res = [];
  chars[s[j].charCodeAt(0) - offset] -= 1;

  while (j < s.length) {
    if (chars.every((v) => v === 0)) {
      res.push(i);
    }

    if (j - i === p.length - 1) {
      chars[s[i].charCodeAt(0) - offset] += 1;
      i += 1;
    }

    j += 1;
    if (j < s.length) {
      chars[s[j].charCodeAt(0) - offset] -= 1;
    }
  }

  return res;
};
