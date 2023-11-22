/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  resultsCount = [];

  for (let i = 0; i < nums.length; i++) {
    if (resultsCount.includes(nums[i])) {
      return true;
    } else {
      resultsCount.push(nums[i]);
    }
  }
  return false;
};

nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
