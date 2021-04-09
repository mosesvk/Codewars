

function inAscOrder(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i+1]) { // checks current value against next value
      return false; // searches for false
    }    
}
return true; // if no false after looping through, returns true
}

// Other/Quicker Answers
function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}