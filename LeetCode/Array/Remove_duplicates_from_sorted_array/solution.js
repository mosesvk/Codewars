const removeDuplicates = nums => {
  let i = 0;

  for (let j = 1; j < nums.length; j++){
    if (nums[i] != nums[j]){
      i++
      nums[i] = nums[j]
    }
  }
}


var removeDuplicates = function(nums) {
  var len = nums.length;
  var last = null;
  var count = 0;

  for (var i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }

  return count;
};


////////////////////////////////////////////////////////////

var removeDuplicates = function(nums) {
  let i = 0;
  for(let j = 1; j < nums.length; j++){
      if(nums[i] != nums[j]){
          i++;
          nums[i]=nums[j];
      }
  }
  return i+1;
};

////////////////////////////////////////////////////////////
