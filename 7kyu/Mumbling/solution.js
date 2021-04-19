function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

///////////////////////////

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

////////////////////////////




// HTML/CSS: 
// What are different ways of centering something horizontally in CSS?

// JavaScript: 
// What is a prototype in JavaScript?

// React: 
// Describe PropTypes in React?