function twoSum(nums: number[], target: number): number[] {
  let x = 0;
  let y = 0;

  let hashTable: { [key: number]: number } = {};
  let complement;

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in hashTable) {
      return [hashTable[complement], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }

  return [x, y];
}

// num in nums will loop over indexe
// num of nums will loop over values
/*  for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                x = i;
                y = j;
                return [x, y];
            }
        }
    } */

let nums = [2, 7, 11, 15];
let target = 9;
//Output: [0,1]
console.log(twoSum(nums, target));
