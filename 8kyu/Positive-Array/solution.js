// Faster solution

function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
  //the filter is just finding positive numbers
  //reduce a is the same as "let sum = 0"
  //reduce b is what will loop through the array
  // and the 0 is what "a" is initialized to 
}

// For loop solution

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      sum += arr[i]
    }
  }
  return sum
}