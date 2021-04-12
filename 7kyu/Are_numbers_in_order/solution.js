

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
// => (>) is for the direct child, (,) is for multiple selectors, ( space ) is

// JavaScript: 
// Describe square bracket notation and when you would use it. 
// => bracket notation allows us to access object properties using VARIABLES. especially if we don't have access to an object property's value. 
// => But dot notation is mostly used because is clearer to understand

// React: 
// What are keys in React, and why should you use them with lists?
// => the key value needs to be unique for every element, we will assign i as a key for each created element. Because the DOM has no way of knowing the values of each element. 