/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const seen = new Array(A.length);
  const result = new Array(A.length);
  let nums = seen.length;

  for (let i = A.length - 1; i >= 0; i -= 1) {
    result[i] = nums;
    const a = A[i];
    const b = B[i];

    if (seen[a] === undefined) {
      nums -= 1;
      seen[a] = true;
    }
    if (seen[b] === undefined) {
      nums -= 1;
      seen[b] = true;
    }
  }

  return result;
};
