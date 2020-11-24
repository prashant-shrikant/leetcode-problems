// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// Brute Force Technique
var twoSumBF = function(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] == target) {
            console.log(i)
            console.log(j)
              result.push(i);
              result.push(j);
              return result;
          } 
      }
  } 
};

// Approach using Map
var twoSumHM = function(nums, target) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i< nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      console.log(i)
      console.log(map.get(complement))
      result.push(i);
      result.push(map.get(complement));
      return result;
    }
  }
}




const resultHM = twoSumHM([2,5,5,11], 10);
const resultBF = twoSumBF([2,5,5,11], 10);