const example1 = [20,1,15,3,10,5,8];

function longestArithSeqLength(nums: number[]): number {
  const differences: {[x: string]: number} = {};
  let prevNum = nums[0];

  for (let i = 1; i < nums.length; i += 1){
    const curNum = nums[i];
    const difference = curNum - prevNum;
    differences[difference] = (differences[difference] ?? 1) + 1;
    prevNum = curNum;
  }
    
  return Math.max(...Object.values(differences));
};

console.log(longestArithSeqLength(example1));