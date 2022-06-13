// My Initial Solution
// But it was wrong

var twoSum = function (nums, target) {
  let num = 0;
  let num2 = 1;

  for (i = 0; i < nums.length - 1; i++) {
    for (j = 1; i < nums.length - 1; j++) {
      if ((nums[i] = target - nums[j])) {
        return [i, j];
      }
      j++;
    }
    if ((nums[i] = target - nums[j])) {
      return [i, j];
    }
    i++;
  }
};

// Correct Solutions
//Simple
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        let arr = [i, j];
        return arr;
      }
    }
  }
};

//Advanced
var twoSum = function (nums, target) {
  let hash = {};
  let result;
  for (let i = 0; i < nums.length; i++) {
    let targetResult = target - nums[i];
    if (nums[hash[targetResult]] + nums[i] === target) {
      result = [hash[targetResult], i];
      break;
    } else {
      hash[nums[i]] = i;
    }
  }
  return result;
};
