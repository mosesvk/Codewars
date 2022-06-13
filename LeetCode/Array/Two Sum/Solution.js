



// My Initial Solution

var twoSum = function(nums, target) {
  let num = 0
  let num2 = 1
  
  for (i = 0; i < nums.length - 1; i++) {
      for (j = 1; i < nums.length - 1; j++) {
          if (nums[i] = target - nums[j]) {
              return [i, j]
          }
          j++
      }
      if (nums[i] = target - nums[j]) {
          return [i, j]
      }
      i++
  }
};
