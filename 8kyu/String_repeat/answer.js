//step 1: ask clarifying questions
//step 2: function signature -> function(args) => number
//step 3: sample data, 
//step 4: pseudo code (step by step of what you will be doing)
// Solve Problem

function repeatStr (n, s) {
  // declare a variable as an empty string
  let string = ''; 
  // loop through 'n' which is the number of times to repeat the string 
  for (i = 0; i < n; i++){
    // add 's' to string every time it loops through
    string += s
  }
  //return string 
  return string
}

/// Other/Faster solutions

function repeatStr (n, s) {
  return s.repeat(n);
}

const repeatStr = (n, s) => s.repeat(n)




/// Interview Q's 

/// HTML/CSS
// What are the different values for the position property in CSS, and how do they work? 
// => Static - Default position 
// => Relative - Relative  to its normal position
// => Absolute - Relative to its first positioned ancestor element
// => Fixed - Relative to the browser window
// => Sticky - Based on user's scroll position
// => Initial - Sets back to it's default value 
// => Inherit - Inherits property from its parent

/// JavaScript
//  Explain some of the differences between let, var, and const?
//  => let - cannot be re-declared within same scope, unlike var. let only exists within a scope. Outside of that scope, you don't have to worry about that variable. 
//  => var - globally scoped. can be re-declared and updated. var declarations are the only ones able to be hoisted so we can declare a variable after it is initialized. sucks cuz you may forget that the var was already defined earlier in your code
//  => const - similar to let, only accessible within its scope. Cannot be updated or re-declared. Must be initialized during declaration. 

/// React
//  What are refs in React? 
//  => They allow access to DOM nodes or React elements created in the render method