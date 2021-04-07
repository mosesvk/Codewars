
// My Answer
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// Other Answers
function positiveSum(arr) {
  return arr.reduce(( a, b ) => a + ( b > 0 ? b : 0 ),0);
}

function positiveSum (arr) {
  return arr.filter( x => x >= 0 ).reduce(( a, c ) => a + c, 0);
}



/// Additional Q's

// HTML/CSS: 
// Describe the box-model in HTML/CSS.
// => essentially a box will always wrap around every HTML element. 
//    that box consists of margins, borders, padding, and the content element itself.

// JavaScript: 
// What does hoisting refer to, and how does it work in JavaScript?
// ==> this is JS's behavior of having DECLARATIONS in the top
//     Remember to ALWAYS declare all variables at the top of the scope 
//     This is good practice as it will help avoid any bugs.

// React: 
// What is setState and what does it do?
//  ==> adds changes to the component's state and tells React that this component 
//      and its children need to be re-rendered with the updated state.