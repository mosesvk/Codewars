//step 1: ask clarifying questions
//step 2: function signature -> function(args) => number
//step 3: sample data, "This website is for losers LOL!"
//step 4: pseudo code (step by step of what you will be doing)
// Solve Problem


const disemvowel = str => {
  const vowel = /[aeiou]/gi
  const vowelessStr = str.replace(vowel, '')
  return vowelessStr
}

const disemvowel = string => string.replace(/[aeiou]/gi, '')
//Remember the 'gi' is a modifier to do a case INSENSITIVE search because there are both capitalize and non cap letters. 

// HTML/CSS: 
// How could you make a star using CSS shapes only?
// Code 3 isosceles triangles overlapping eachother making sure each of the points are the tips of the star.

// JavaScript: 
// Describe how scoping works in JavaScript.

// React: 
// Where would you make AJAX or Axios requests in a React application?