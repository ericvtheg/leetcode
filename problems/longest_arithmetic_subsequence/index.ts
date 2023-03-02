const example1 = [83,20,17,43,52,78,68,45];

function longestArithSeqLength(nums: number[]): number {
  let maxDifference = -1;

  const runThroughs: { [x: string]: { [x: string]: number } } = {};
  for (let i = 0; i < nums.length; i += 1){
    let curNum = nums[i];
    runThroughs[i] = {};
    
    for (let j = i + 1; j < nums.length; j += 1){
      const subNum = nums[j];
      const difference = curNum - subNum;
      runThroughs[i][difference] = (runThroughs[i][difference] ?? 1) + 1;
    }
    maxDifference = Math.max(...Object.values(runThroughs[i]));
  }
    
  return maxDifference;
};

console.log(longestArithSeqLength(example1));