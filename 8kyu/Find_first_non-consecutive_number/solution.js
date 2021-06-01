function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

//////////////////////////////////////////////////////

function firstNonConsecutive(arr){
  var out = null;
  for(var i = 1; i < arr.length; i++){
    if((arr[i] - arr[i - 1]) != 1){
      out = arr[i];
      break;
    }
  }
  return out;
}