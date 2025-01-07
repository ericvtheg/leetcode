/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) {
    return [[]];
  }

  const perms = permute(nums.slice(1));
  const res = [];

  const toAddNum = nums[0];
  for (const perm of perms) {
    for (let i = 0; i <= perm.length; i += 1) {
      const newPerm = perm.slice();
      newPerm.splice(i, 0, toAddNum);
      res.push(newPerm);
    }
  }

  return res;
};
