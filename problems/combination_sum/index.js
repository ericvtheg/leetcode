/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function dfs(i, cur, sum) {
    if (sum === target) {
      result.push([...cur]);
      return;
    } else if (sum > target) {
      return;
    } else if (i >= candidates.length) {
      return;
    }

    cur.push(candidates[i]);
    dfs(i, cur, sum + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, sum);
  }

  dfs(0, [], 0);

  return result;
};
