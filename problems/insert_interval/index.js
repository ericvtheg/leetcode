/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let hasMerged = false;
  const res = [];

  if (intervals[0][0] > newInterval[1]) {
    res.push(newInterval);
    hasMerged = true;
  }

  for (let i = 0; i < intervals.length; i += 1) {
    let cur = intervals[i];

    if (cur[1] >= newInterval[0] && cur[0] <= newInterval[1] && !hasMerged) {
      cur[0] = Math.min(cur[0], newInterval[0]);
      cur[1] = Math.max(cur[1], newInterval[1]);
      hasMerged = true;
      res.push(cur);
    } else {
      if (!hasMerged) {
        let prev = res[res.length - 1];
        if (prev && prev[1] < newInterval[0] && newInterval[1] < cur[0]) {
          res.push(newInterval);
          hasMerged = true;
        }
        res.push(cur);
        continue;
      }

      let prev = res[res.length - 1];
      if (prev[1] >= cur[0]) {
        prev[1] = Math.max(prev[1], cur[1]);
      } else {
        res.push(cur);
      }
    }
  }

  if (!hasMerged) {
    res.push(newInterval);
  }

  return res;
};
