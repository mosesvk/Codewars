// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
// hint: use split or join along with a map array for a shorter solution
// Major hint: in the map array use a tempString to display the element and it's length. remember the split function changes a string to an array while join function changes an array to a string.

function addLength(str) {
  //code-here
  // use an array method that changes and splits a string object into an array of strings
  // then also use an array method to loop through the array that creates a new array based on the change made above.
  // use a tempstring to include the length of each of the array properties. 
  
  };

  function addLength(str) {
    return str.split('').map(a)
  }