/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let curNum;

  for (const num of nums) {
    if (count === 0) {
      curNum = num;
      count += 1;
    } else {
      if (curNum !== num) {
        count -= 1;
      } else {
        count += 1;
      }
    }
  }

  return curNum;
};
