// Faster solution

function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
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