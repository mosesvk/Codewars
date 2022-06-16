const prob = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      return nums[i] + nums[j] === target ? [i, j] : ''
    }
  }
};

// Correct Solutions
//Simple
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         let arr = [i, j];
//         return arr;
//       }
//     }
//   }
// };

//Advanced
// var twoSum = function (nums, target) {
//   let hash = {};
//   let result;
//   for (let i = 0; i < nums.length; i++) {
//     let targetResult = target - nums[i];
//     if (nums[hash[targetResult]] + nums[i] === target) {
//       result = [hash[targetResult], i];
//       break;
//     } else {
//       hash[nums[i]] = i;
//     }
//   }
//   return result;
// };
