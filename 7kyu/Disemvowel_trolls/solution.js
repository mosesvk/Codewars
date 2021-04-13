
const disemvowel = str => {
  const vowel = /[aeiou]/gi
  const vowelessStr = str.replace(vowel, '')
  return vowelessStr
}

const disemvowel = string => string.replace(/[aeiou]/gi, '')
//Remember the 'gi' is a modifier to do a case INSENSITIVE search because there are both capitalize and non cap letters. 

// HTML/CSS: 
// How could you make a star using CSS shapes only?

// JavaScript: 
// Describe how scoping works in JavaScript.

// React: 
// Where would you make AJAX or Axios requests in a React application?