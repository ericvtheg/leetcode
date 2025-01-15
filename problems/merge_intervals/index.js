/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];

  let i = 1;
  while (i < intervals.length) {
    const last = res[res.length - 1];
    const cur = intervals[i];

    if (last[1] >= cur[0]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      res.push(cur);
    }
    i += 1;
  }
  return res;
};
