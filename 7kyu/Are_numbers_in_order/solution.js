

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


// HTML/CSS: 
// What are the differences between the caret ( > ), comma ( , ), space (   ), and addition ( + ) selectors in CSS?

// JavaScript: 
// Describe square bracket notation and when you would use it. 

// React: 
// What are keys in React, and why should you use them with lists?