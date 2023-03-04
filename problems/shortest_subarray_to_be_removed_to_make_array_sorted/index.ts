function findLengthOfShortestSubarray(arr: number[]): number {
  // get suffix
  let suffixStart = arr.length - 1;
  let suffixMin = arr[suffixStart];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const curNum = arr[i];

    if (curNum <= suffixMin) {
      suffixStart -= 1;
      suffixMin = curNum;
    } else {
      break;
    }
  }
  suffixStart += 1;

  let compatiblePrefixWithSuffixIdx = -1;
  // get prefix
  let prefixMax = arr[0];
  let prefixEnd = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const curNum = arr[i];

    if (curNum >= prefixMax) {
      prefixEnd += 1;
      prefixMax = curNum;

      if (curNum <= suffixMin) {
        compatiblePrefixWithSuffixIdx = i;
      }
    } else {
      break;
    }
  }
  prefixEnd -= 1;

  // nothing to remove
  if ((prefixEnd === arr.length - 1) && suffixStart === 0) {
    return 0;
  }

  const prefixLength = prefixEnd + 1;
  const suffixLength = arr.length - suffixStart;
  const combinedLength = compatiblePrefixWithSuffixIdx + 1 + suffixLength;

  let ans = arr.length - Math.max(prefixLength, suffixLength, combinedLength);

  // sliding window for cases like this [1,2,3,10,4,2,3,5]
  let i = 0;
  let j = suffixStart;
  while (i <= prefixEnd && j < arr.length) {
    if (arr[j] >= arr[i]) {
      ans = Math.min(ans, j - i - 1);
      i += 1;
    } else {
      j += 1;
    }
  }

  return ans;
}

findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]);
