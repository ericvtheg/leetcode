const solution = function (isBadVersion: any) {
  return function (n: number): number {
    if (n === 1) return 1;

    let left = 0;
    let right = n;

    while (left < right) {
      const middle = left + Math.floor((right - left) / 2);
      const isBad = isBadVersion(middle);

      if (isBad) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }

    return left;
  };
};
