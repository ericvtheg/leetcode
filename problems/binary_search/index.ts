function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (true) {
    const middleIdx = left + Math.ceil((right - left) / 2);
    const middleVal = nums[middleIdx];

    if (middleVal === target) {
      return middleIdx;
    } if (middleVal > target) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }

    if (left > right || right < left) {
      return -1;
    }
  }
}

// best solution (not mine)
// public int search(int[] nums, int target) {
//   int low = 0;
//   int high = nums.length - 1;
//   while(low <= high){
//       int mid = low + (high - low) / 2; //avoid integer overflow;
//       if(nums[mid] == target){
//           return mid;
//       }
//       else if(nums[mid] < target){
//           low = mid + 1;
//       }
//       else{
//           high = mid - 1;
//       }
//   }
//   return -1;
// }
// }
