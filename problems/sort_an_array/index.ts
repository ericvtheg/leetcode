function sortArray(nums: number[]): number[] {
    return divideAndConquer(nums);
    
};

function divideAndConquer(nums: number[]): number[] {
    const arrLength = nums.length;
    if (arrLength <= 1) return nums;

    const middleLength = Math.floor(arrLength / 2);
    const lowerHalfArr = nums.slice(0, middleLength)
    const upperHalfArr = nums.slice(middleLength);

    const sortedLowerHalfArr = divideAndConquer(lowerHalfArr);
    const sortedUpperHalfArr = divideAndConquer(upperHalfArr);

    let lowerHalfIdx = 0;
    let upperHalfIdx = 0;
    let curIdx = 0;
    const sortedArr = new Array(arrLength);
    while (curIdx < arrLength) {
        const lowerHalfVal = sortedLowerHalfArr[lowerHalfIdx];
        const upperHalfVal = sortedUpperHalfArr[upperHalfIdx];

        if (lowerHalfVal === undefined) {
            sortedArr[curIdx] = upperHalfVal;
            upperHalfIdx += 1;
            curIdx += 1;
            continue;
        }

        if (upperHalfVal === undefined) {
            sortedArr[curIdx] = lowerHalfVal;
            lowerHalfIdx += 1;
            curIdx += 1;
            continue;
        }

        if (lowerHalfVal < upperHalfVal) {
            sortedArr[curIdx] = lowerHalfVal;
            lowerHalfIdx += 1;
            curIdx += 1;
        } else {
            sortedArr[curIdx] = upperHalfVal;
            upperHalfIdx += 1;
            curIdx += 1;
        }
    }
    return sortedArr;
}
